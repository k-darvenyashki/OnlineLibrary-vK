import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    render(){
       return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <Form>
                                <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                </FormGroup>
                                <Link to="/home">
                                    <Button>Влез</Button>
                                </Link>
                               
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
    }
}

const mapStateToProps = state => {
    return {
        inputText: state.inputText,
        selectedMovies: state.selectedMovies
    }
};

export default connect(mapStateToProps)(Login);