import React from 'react';
import {
  Container, Col, Form,
  FormGroup,
  Button,
} from 'react-bootstrap';

class Login extends React.Component{
	render(){
		return(
			<React.Fragment>
        <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <label>Email</label><br/>
              <input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <label for="examplePassword">Password</label><br/>
              <input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Col>
            <Button>Submit</Button>
          </Col>
          
        </Form>
      </Container>
        
        </React.Fragment>
		)

	}
}

export default Login;