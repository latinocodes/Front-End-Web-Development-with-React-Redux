import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HearderComponent';
import Footer from './FooterComponent';
import About from './AboutusComponent';
import {DISHES} from '../shared/dishes';
import DishDetails from './DishDetailsComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Contact from './ContactComponent';
import {Switch, Route, Redirect} from "react-router-dom";


class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS, 
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };

  }

  render() {
    const HomePage = () =>{
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      )

    }

    const DishWithId = ({match}) => {
      return(
          <DishDetails dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
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
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> 
          <Route exact path='/menu/:dishId' component={DishWithId} />} /> 
          <Route exact path='/about' component={()=><About leaders={this.state.leaders}/>} />} />
          <Route exact path='/contact' component={Contact} />} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
