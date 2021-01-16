import Link from 'next/link'

export default function PostList({ nutPastes }) {
  if (nutPastes === 'undefined') return null

  return (
    <div>
      {!nutPastes.length && <div>No nut pastes!</div>}
      <ul>
        {nutPastes &&
          nutPastes.map((item) => {
            return (
              <li key={item.slug}>
                {item.slug}: {` `}
                <Link href={{ pathname: `/nut/${item.slug}` }}>
                  <a>{item?.frontmatter?.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
