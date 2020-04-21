import React from 'react';
import {Form, Row, Col, Button, Table} from 'react-bootstrap';

export default class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            gender: "male",
            courses: ["react"]
        }
    }

    submit = event => {
        event.preventDefault();
        alert("Clicked");
    }

    onRadioClick = value => () => {
        this.setState({
            gender: value
        });
    }

    onCheckSelect = value => () => {
        this.setState((state) => {
            const courses = [...state.courses];
            if(courses.includes(value)) {
                const index = courses.indexOf(value);
                courses.splice(index, 1);
            } else {
                courses.push(value);
            }
            return {courses};
        });
    }

    nameChange = event => {
        const {value} = event.target
        this.setState({name: value});
    }

    ageChange = event => {
        const {value} = event.target
        this.setState({age: value});
    }

    render() {
        const {name, age, gender, courses} = this.state;
        return(
            <div>
                <div className="form-Div">
                    <Form onSubmit={this.submit}>
                        <Form.Group as={Row} controlId="formInputName">
                            <Form.Label column sm="4">
                            Name
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control type="text" value={name} placeholder="Vishal" onChange={this.nameChange} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formInputName">
                            <Form.Label column sm="4">
                            Age
                            </Form.Label>
                            <Col sm="8">
                            <Form.Control type="number" value={age} placeholder="26" onChange={this.ageChange} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formInputName">
                            <Form.Label column sm="4">
                            Gender
                            </Form.Label>
                            <Col sm="4">
                                <Form.Check type="radio" onChange={this.onRadioClick("male")} label="Male" name="gender" checked={gender==="male"} />
                            </Col>
                            <Col sm="4">
                                <Form.Check type="radio" onChange={this.onRadioClick("female")} label="Female" name="gender" checked={gender==="female"} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formInputName">
                            <Form.Label column sm="4">
                            Courses
                            </Form.Label>
                            <Col sm="4">
                                <Form.Check onChange={this.onCheckSelect("react")} type="checkbox" label="React" name="courses" checked={courses.includes("react")} />
                            </Col>
                            <Col sm="4">
                                <Form.Check onChange={this.onCheckSelect("angular")} type="checkbox" label="Anguar" name="courses" checked={courses.includes("angular")} />
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <br />
                <br />
                <br />
                <div className="table-div">
                    <Display />
                </div>
            </div>
        );
    };
};

class Display extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
