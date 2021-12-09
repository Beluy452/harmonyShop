import { AppBar, Toolbar } from '@mui/material'
import Link from 'next/link'

import styles from './header.module.css';

export default function Header() {
	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<nav className={styles.nav} role="navigation" aria-label="main navigation">
						<Link href="/">
							<a className={styles.link}>Головна сторінка</a>
						</Link>
						<Link href="/about">
							<a className={styles.link}>Про нас</a>
						</Link>
						<Link href="/allCategories">
							<a className={styles.link}>
								Всі товари
							</a>
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
		</>
	)
}
