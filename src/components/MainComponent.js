import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HearderComponent';
import Footer from './FooterComponent';
import About from './AboutusComponent';
import DishDetails from './DishDetailsComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
};


class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const HomePage = () =>{
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      )

    }

    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
          />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* for this route below you cannot use just simply compoenent because you need to pass a props
          therefore you wnat to pass a function call  */}
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} /> 
          <Route exact path='/menu/:dishId' component={DishWithId} />} /> 
          <Route exact path='/about' component={()=><About leaders={this.props.leaders}/>} />} />
          <Route exact path='/contact' component={Contact} />} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
