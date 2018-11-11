import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Allows us to basically get state from redux into react then into a react component
import { connect } from 'react-redux';

import { getItems, deleteItem } from '../actions/itemActions'

// This is NOT part of redux. It's part of react. Whenever you have component properties you should put them inside of prop types which basically is kind of a form of validation.
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  // state = {
  //   items: [
  //     { id: uuid(), name: 'Eggs' },
  //     { id: uuid(), name: 'Milk' },
  //     { id: uuid(), name: 'Steak' },
  //     { id: uuid(), name: 'Water' },
  //   ]
  // }
  componentDidMount() {
    this.props.getItems();
  }

  // When we click the delete button it's going to call onDeleteClick it's going to pass the id in which gets passed. And then we're gonna call the action delete item pass in the id which is this below and its going to get sent to the reducer along withe payload and then in the reducer we filter it

  // export const deleteItem = (id) => {
  //   return {
  
  //     type: DELETE_ITEM,
  
  //     payload: id
  //   };
  // }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    // item represents the entire state object
    // items is the array inside  the state
    // this.props.item.items
    const { items } = this.props.item;
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
          {/* _id because MongoDB saves with _id */}
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                  //@times; = X icon
                >&times;
                </Button>
                  {name}
                </ListGroupItem>
              
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  // We basically have two props in this component we have getItems which is actually going to be a prop this action that we brought in above. When you bring in an action from redux it's going to be stored as a prop
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

//When we import { connect } from 'react-redux'; What we have to do is instead of exporting like this "export default ShoppingList" 

const mapStateToProps = (state) => ({
  item: state.item
});

// We do this instead
export default connect(mapStateToProps, { getItems, deleteItem})(ShoppingList);
// What mapStateToProps does is it allows us to take our items state. 

//In this case this is our state and we want to basically turn this or map this into a COMPONENT PROPERTY so that we can use it in shopping lists. So we want to be able to use it as this.props.items

// const initialState = {
//   // The goal is to get our shopping list component to display these items instead of what's embedded in the component. In order to do that we need an action.
//   items: [
//     { id: uuid(), name: 'Eggs' },
//     { id: uuid(), name: 'Milk' },
//     { id: uuid(), name: 'Steak' },
//     { id: uuid(), name: 'Water' },
//   ]
// }