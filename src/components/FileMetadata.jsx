import React from 'react'
import Link from 'next/link'

import Card from 'react-bootstrap/Card'

const FileMetadata = ({ metadata }) => {
    const { readableDate, date, summary } = metadata
    const linkHref = {
        pathname: '/date/[id]',
        query: { id: date }
    }

    return (
        <Card>
            <Card.Header>
                Transcription
            </Card.Header>

            <Card.Body>
                <Card.Title>{summary}</Card.Title>

                <Card.Text className="blockquote-footer">
                    {readableDate}
                </Card.Text>

                <Card.Text>
                    <Link href={linkHref}>read</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FileMetadata