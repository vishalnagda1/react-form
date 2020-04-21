import React from 'react';
import {Form, Row, Col, Button, Table} from 'react-bootstrap';

export default class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: "",
            gender: "Male",
            courses: ["React"],
            display: false
        }
    }

    submit = event => {
        event.preventDefault();
        this.setState({display: true});
    }

    onRadioClick = value => () => {
        this.setState({gender: value, display: false});
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
            return {courses, display: false};
        });
    }

    nameChange = event => {
        const {value} = event.target
        this.setState({name: value, display: false});
    }

    ageChange = event => {
        const {value} = event.target
        this.setState({age: value, display: false});
    }

    render() {
        const {name, age, gender, courses} = this.state;
        // const display = "";
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
                                <Form.Check type="radio" onChange={this.onRadioClick("Male")} label="Male" name="gender" checked={gender==="Male"} />
                            </Col>
                            <Col sm="4">
                                <Form.Check type="radio" onChange={this.onRadioClick("Female")} label="Female" name="gender" checked={gender==="Female"} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formInputName">
                            <Form.Label column sm="4">
                            Courses
                            </Form.Label>
                            <Col sm="4">
                                <Form.Check onChange={this.onCheckSelect("React")} type="checkbox" label="React" name="courses" checked={courses.includes("React")} />
                            </Col>
                            <Col sm="4">
                                <Form.Check onChange={this.onCheckSelect("Angular")} type="checkbox" label="Anguar" name="courses" checked={courses.includes("Angular")} />
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
                    {this.state.display && <Display data={this.state} />}
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
        const {name, age, gender, courses} = this.props.data;
        return(
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>Courses</td>
                        <td>{courses.join(", ")}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
