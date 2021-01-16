import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'

export default function NutPost({ siteTitle, frontmatter }) {
  if (!frontmatter) return <></>

  console.log(frontmatter, ' frontmatter');

  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <div className="back">
          ←{' '}
          <Link href="/">
            <a>Back to post list</a>
          </Link>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.img && (
            <img
              src={frontmatter.img}
              className="hero"
              alt={frontmatter.title}
            />
          )}
          {frontmatter.description && (
            <p>{frontmatter.description}</p>
          )}
        </article>
      </Layout>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 1200px;
        }
        h1 {
          font-size: 3rem;
        }
        h3 {
          font-size: 2rem;
        }
        .hero {
          width: 100%;
        }
        .back {
          width: 100%;
          max-width: 1200px;
          color: #00a395;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../content/nutPastes/${postname}/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
    },
  }
}

export async function getStaticPaths() {
  const nutSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../content/nutPastes', true, /\.md$/))

  const paths = nutSlugs.map((slug) => `/nut/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
