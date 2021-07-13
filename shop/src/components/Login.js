// Bootstrap-import
import {
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Jumbotron,
    Badge
} from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// lib-Grp
import { Link, Route, Switch } from 'react-router-dom'

function Login(params) {
    return(
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            Forgot your email ?
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                            Forgot your password ?
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="outline-success" type="submit">Submit</Button>&nbsp;
                        <Link to="signup"><Button variant="outline-info">SignUp</Button></Link>
                    </Form>
                </Col>
            </Row>
        </Container>
            

    );
}

export default Login;