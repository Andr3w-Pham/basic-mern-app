// A reducer is where our actual state is going to go and this is where we check our actions . We're going to make an actions file that will have i.e. get items action, add item action and its going to dispatch to  our reducer & it can send along a payload if it wants.

// So if we were to fetch data from our server for let's say  get items we would then dispatch to the reducer  and we would send that response we get from our server to  the reducer and then we would do what we want with it which would be to  add it to React to our component.

// In our reducer we need to evaluate action types so we need to create some types so any action that we have like get items, add item, delete item. We want to have types for.

// We're going to bring types into our reducer
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';


const initialState = {
  // The goal is to get our shopping list component to display these items instead of what's embedded in the component. In order to do that we need an action.
  items: [],
  loading: false
}

// action is an obj and it'll have a type attached to it
export default function(state = initialState, action) {
  // When the action comes in we want to run a test on the type. Remember it's an object so we can access the type with action.type
  switch(action.type) {
    // What we want to check for is things like:
    case GET_ITEMS: 
      return {
        ...state,
        // Right now items is blank so what we're doing here is basically making a copy of the current state and we're adding these new items which come from the action.payload
        items: action.payload,
        // And we also want to make sure we set loading back to false because before we made the request we called setitemsloading which makes a request to the reducer with items loading as the type which sets loading to true.
        loading: false
      };

    case DELETE_ITEM:
      return {
        // We want everything that's currently in the state. That's where the spread operator comes in
        ...state,
        
        // if item.id is not = to id so with whatever item we click delete;  it's not going to be returned  in this array. It would be filtered out - deleted from the ui // We're getting the id with action.payload which was passed from actions
        items: state.items.filter(item => item._id !== action.payload)
      };

      case ADD_ITEM:
        return {
          ...state,
          // The payload is the new item and it's going to get added to db and ui
          items: [action.payload, ...state.items]
        }

        case ITEMS_LOADING:
        return {
          // initial state
          ...state,
          loading: true
        }



      default:
       return state;
  }
}