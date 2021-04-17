import React from 'react'

import styles from 'styles/Home.module.css'

const PageNumberComponent = ({ children, title }) => {
    const linkHref = `#${children}`

    return (
        <React.Fragment>
            <a className={styles.code} href={linkHref} title={title}>
                #{children}
            </a>
        </React.Fragment>
    )
}

const PageHeader = ({ children }) => {
    return (
        <React.Fragment>
            <h2>{children}</h2>
        </React.Fragment>
    )
}

const PageContent = ({ line, content }) => {
    return (
        <React.Fragment>
            <div className={styles.cardContentBox}>
                <span className={styles.code}>{line}</span>
                <p className={styles.description}>{content}</p>
            </div>
        </React.Fragment>
    )
}

const Card = ({ page_number, header, content }) => {
    return (
        <React.Fragment>
            <section className={styles.card} id={page_number}>
                <header className={styles.cardHeader}>
                    <PageNumberComponent title={header}>
                        {page_number}
                    </PageNumberComponent>

                    <PageHeader>{header}</PageHeader>
                </header>

                <div className={styles.cardContent}>
                    {content.map(({ line_number, data }) => (
                        <PageContent
                            key={line_number}
                            line={line_number}
                            content={data}
                        />
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Card