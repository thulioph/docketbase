import React from 'react'
import Link from 'next/link'

import styles from 'styles/Home.module.css'

const BackButton = ({ children }) => {
    return (
        <React.Fragment>
            <section className={styles.backButton}>
                <Link href="/">
                    <button>{children}</button>
                </Link>
            </section>
        </React.Fragment>
    )
}

export default BackButton