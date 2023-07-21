import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Register = () => {
    return (
        <Container>
            <Form>
                <h1>Register</h1>
                <Form.Group>
                    <Form.Label for="uname">Full Name</Form.Label>
                    <Form.Control type='text' placeholder='Full Name'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="uemal">Email</Form.Label>
                    <Form.Control type='email' placeholder='Email'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="uphone">Phone</Form.Label>
                    <Form.Control type='tel' placeholder='Phone number'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="upassword">Password</Form.Label>
                    <Form.Control type='password' placeholder='Password'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label for="upassword2">Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password'></Form.Control>
                </Form.Group>
                <Button className="btn btn-primary">Register</Button>
            </Form>
        </Container>
    )
}

export default Register;