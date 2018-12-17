import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetails extends Component{
    constructor(props){
        super(props)

        this.state = {
            comments: null
        }
    }
    render(){
        const comments = this.props.dish.comments.map((item) => {
            return (
              <div key={item.id}>
                <h5>Author: {item.author}</h5>
                <p>Comment: {item.comment}</p>
                <p>Rating: {item.rating}</p>
                <p>Date: {item.date.split("T")[0].toString()}</p>
              </div>
            );
        }); 

        return(
            <div className="row">
                <Card className="col-md-5 m-1">
                    <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                <div className="col-md-5 m-1">
                    {comments}
                </div>
            </div>
    
        );
    }
}


export default DishDetails;