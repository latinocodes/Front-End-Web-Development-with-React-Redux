import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Label, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Col } from 'reactstrap';
import {Link} from 'react-router-dom';


class DishDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            comments: null,
            isNavOpen: false,
            isModalOpen: false,
            
            name: '',
            rating: '',
            comment: ''
        }

        this.togglerNav = this.togglerNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleSubmit(event) {
        this.toggleModal();
        console.log(this.state);
        event.preventDefault();
    }

    togglerNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render(){
        if(this.props.dish != null ){
            const comments = this.props.comments.map((item) => {
                return (
                <div key={item.id}>
                    <h5>Author: {item.author}</h5>
                    <p>Comment: {item.comment}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Date: {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
                </div>
                );
            }); 
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-5">
                            {comments}
                            <Button onClick={this.toggleModal}>
                                <i className="fa fa-comment"/> Add Comment
                            </Button>
                        </div>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="username">Rating</Label>
                                    <Col md={{size: 10}}>
                                        <Input type="select" name="rating" value={this.state.rating} onChange={this.handleInputChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="name">Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="name" name="name"
                                            innerRef={(input) => this.name = input} value={this.state.name} onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="message">Your Comment: </Label> 
                                    <Col md={10}>
                                        <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }
}


export default DishDetails;