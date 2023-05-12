import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import styles from './auth.module.css'

function Welcome() {
    return (
        <>
            <div className={styles.welComeWrapper}>
                <Container className={styles.welComeWrapper}>
                    <Row>
                        <Col>
                            <h1>Hellow World</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Welcome