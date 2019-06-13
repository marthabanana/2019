import React, { PureComponent } from 'react'
import Col from 'react-bootstrap/lib/Col'
import Grid from 'react-bootstrap/lib/Grid'
import Modal from 'react-bootstrap/lib/Modal'
import Row from 'react-bootstrap/lib/Row'

export default class EntityModal extends PureComponent {
  componentDidUpdate() {
    setTimeout(() => {
      const modal = document.querySelector('.modal')
      modal.scrollTop = 0
    }, 10)
  }

  render() {
    const { title, body, previous, next, className, goBack } = this.props

    return (
      <Modal show={true} keyboard={true} onHide={goBack} className={className}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Grid fluid style={{ padding: 0 }}>
            <Row>
              <Col sm={6} style={{ textAlign: 'left' }}>
                <strong>&larr; {previous}</strong>
              </Col>
              <Col sm={6}>
                <strong>{next} &rarr;</strong>
              </Col>
            </Row>
          </Grid>
        </Modal.Footer>
      </Modal>
    )
  }
}
