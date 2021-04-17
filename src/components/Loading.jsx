import React from 'react'

import styles from 'styles/Home.module.css'

const Loading = () => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>Loading</h1>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Loading