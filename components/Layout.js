import Head from 'next/head'

import Header from './Header'
import { Container } from '@mui/material';

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="Description" content={description} />
      </Head>
      <section className="layout">
        <Header />
				<Container maxWidth="lg">
				<div className="content">{children}</div>
				</Container>
      </section>
      <footer>
				Footer
      </footer>
    </>
  )
}
