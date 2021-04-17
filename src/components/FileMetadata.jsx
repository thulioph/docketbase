import React from 'react'
import Link from 'next/link'

import styles from 'styles/Home.module.css'

const FileMetadata = ({ metadata }) => {
    const { readableDate, date, summary } = metadata
    const linkHref = {
        pathname: '/date/[id]',
        query: { id: date }
    }

    return (
        <div className={styles.fileMetaData}>
            <Link href={linkHref}>
                <a>
                    <h2>{readableDate}</h2>
                    <p className={styles.description}>{summary}</p>
                </a>
            </Link>
        </div>
    )
}

export default FileMetadata