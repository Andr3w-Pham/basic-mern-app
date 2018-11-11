import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// This is where thunk comes in. It allows us to this so that we can make an asynchronous request.

// In order for us to use this dispatcher we have to do this 
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then(res =>
       dispatch({
         // Basically this is going to our item reducer and it's checking  action.type
         type: GET_ITEMS,
         payload: res.data
       })
    )
};

export const addItem = (item) => dispatch => {
  axios
    .post('/api/items', item)
    .then(res => 
      dispatch({
      type: ADD_ITEM,
      payload: res.data
    }))
};


// Takes in an id to know which item to delete
export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
      )
};


export const setItemsLoading = () => {
  return {
    // Which ultimately sets if from false to true
    type: ITEMS_LOADING
  }
}