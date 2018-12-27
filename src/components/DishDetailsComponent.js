import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


class DishDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            comments: null
        }
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
                        </div>
                    </div>
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