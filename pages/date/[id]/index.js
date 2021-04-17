import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppDataContext from 'src/context/app'
import Loading from 'src/components/Loading'
import Card from 'src/components/Card'
import BackButton from 'src/components/BackButton'

import styles from 'styles/Home.module.css'

const TranscriptionPage = () => {
    const { current, updateCurrent } = useContext(AppDataContext)
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (!current) {
            setIsLoading(true)
            updateCurrent(id)
            setIsLoading(false)
        }
    }, [current, updateCurrent, id, setIsLoading])

    if (isLoading || !current) return <Loading />

    const { transcription } = current

    return (
        <React.Fragment>
            <div className={styles.container}>
                <BackButton>Go back</BackButton>

                {transcription.map((data, idx) => (
                    <Card key={idx} {...data} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default TranscriptionPage