import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Badge from 'react-bootstrap/Badge'

import Loading from 'src/components/Loading'
import { getFiles } from 'src/services/data-manager'
import { renderString } from 'src/utils'

import styles from 'styles/general.module.css'

const TranscriptionPage = ({ files }) => {
    const [current, setCurrent] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const { id } = router.query

    const updateCurrent = (selectedDate) => {
      const item = files.find(({ metadata }) => metadata.date === selectedDate)
      setCurrent(item)
    }    

    useEffect(() => {
        if (id) {
            setIsLoading(true)
            updateCurrent(id)
            setIsLoading(false)
        }
    }, [current, updateCurrent, id, setIsLoading])

    if (isLoading || !current) return <Loading />

    const { transcription, metadata } = current

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" className="justify-content-between">
                <Navbar.Brand href="/">DocketBase</Navbar.Brand>
            </Navbar>

            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <h1>{metadata.summary}</h1>
                            <p>{metadata.readableDate}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>{metadata.date}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                </Container>
            </Jumbotron>

            <Container>
                <Row>
                    <Col>
                        {transcription.map(({ page_number, header, content }, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <section className={styles.transcriptionContainer} id={page_number}>
                                        <header className={styles.transcriptionHeader}>
                                            <h4>{header}</h4>

                                            <Badge variant="light">
                                                <a href={`#${page_number}`} title={`Go to page ${page_number}`}>
                                                    Pg. {page_number}
                                                </a>
                                            </Badge>
                                        </header>

                                        <div>
                                            <p className={styles.transcriptionText} dangerouslySetInnerHTML={{ __html: renderString(content) }} />
                                        </div>
                                    </section>
                                </React.Fragment>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default TranscriptionPage

export async function getStaticPaths() {
	const files = getFiles()

	const paths = files.map(({ metadata }) => ({
		params: { id: metadata.date },
	}))

	return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const files = getFiles()

  return {
    props: {
      files
    }
  }
}