import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import CardDeck from 'react-bootstrap/CardDeck'

import Loading from 'src/components/Loading'
import FileMetadata from 'src/components/FileMetadata'
import { getFiles } from 'src/services/data-manager'

import styles from 'styles/general.module.css'

export default function Home({ files }) {
  if (!files || !files.length) {
    return (
      <Loading />
    )
  }

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="light"></Navbar>

      <Jumbotron fluid>
        <Container>
          <h1 className={styles.centerAlign}>DocketBase</h1>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col md={2}></Col>

          <Col md={8}>
            <CardDeck>
              {files.map((item, idx) => (
                <FileMetadata key={idx} {...item} />
              ))}
            </CardDeck>
          </Col>

          <Col md={2}></Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export function getStaticProps(context) {
  const files = getFiles()

  return {
    props: {
      files
    }
  }
}