# React Fetching Data from REDDIT API
This is a react application for fetching data from an API. The API used is Reddit API. The tutorial followed to build the app was https://redux.js.org/advanced/. This is official website of Redux.org. 

The main concepts used in developing this application are the following:

1. State

In Redux, all the application state is stored as a single object. 
You'll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, but try to keep the data separate from the UI state.

Syntax for defining state:

                 {
                  key1: 'value1',
                  object: [
                    {
                      text: 'Consider using Redux',
                      completed: true
                    },
                    {
                      text: 'Keep all state in a single tree',
                      completed: false
                    }
                  ]
                }

Thus, in a similar way we will list all the keys and values and objects required to desgin our state. Check state in source code for reference.


2. Actions

Actions are the payload of information that you pass from your application to the store. In actions, you just define the type and you can add on fields like index and some other parameters you want to deal with.

Syntax for defining action type: ActionTypes.js

        export default const action_name='TYPE_NAME'{
        text:"example_text"
        }
        
Syntax for importing an action from ActionTypes.js

        import action_name from '../ActionTypes'

Action Creators are the functions that create actions. For each action, you create an actioncreator which defines what that action will do. It will return type of action or some other parameters.

Syntax to define an action creator : index.js 
        
        function function_name(arg){
          return {
            type: action_name,
            text
            //other keys you want to deal with
          }
        }

Syntax to dispatch an action creator function , you can use the 

        dispatch(function_name(arg))


Alternatively, you can combine action creator declaration and dispatch as:

Syntax to combine :

        const bindfunction = text => dispatch(function_name(text))
        
Now, you can call this function as

        bindfunction(text)
        
The dispatch() function can be accessed directly from the store as store.dispatch(), but more likely you'll access it using a helper like react-redux's connect(). You can use bindActionCreators() to automatically bind many action creators to a dispatch() function.

For an asynchronous API call, you need to dispatch atleast three actions:
-> Indication that action has started.
-> Indication that action was processed successfully.
-> Indication that some error occurred.

Syntax for actionstypes

      { type: 'FETCH_REQUEST' }
      { type: 'FETCH_FAILURE', error: 'Oops' }
      { type: 'FETCH_SUCCESS', response: { ... } }
    
The action creators we require to handle these action types are similar to what we have learned earlier. Check the source code for reference.

3.Reducers

We use reducers to handle actions. It functions like this:
 
       (previousState, action) -> (nextState)

Syntax for defining a reducer: The reducer switches the action type and according to the action type, any keys to the state can be updated.

        function reducername(state = initialState, action) {
          switch (action.type) {
            case action_name:
              return Object.assign({}, state, {
                key: action.key //value of action to be assigned
              })
            default:
              return state
          }
        }
Note -          
#IMMUTABILITY OF STATE-
        
We don't mutate the state. We create a copy with Object.assign(). Object.assign(state, { key: action.key}) is also wrong: it will mutate the first argument. You must supply an empty object as the first parameter. You can also enable the object spread operator proposal to write { ...state, ...newState } instead.

We return the previous state in the default case. It's important to return the previous state for any unknown action.

Combining Reducers
Finally, Redux provides a utility called combineReducers() that does the same boilerplate logic that the todoApp above currently does. With its help, we can rewrite todoApp like this:

Syntax for combining reducers: reducers/index.js

          import { combineReducers } from 'redux'
 
          const todoApp = combineReducers({
            key,
            object
          })
          
          export default todoApp
 

4.Components-
Components used can be of two types:
->Presentational Components
 Are concerned with how things look. May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.Don’t specify how the data is loaded or mutated.Receive data and callbacks exclusively via props.Rarely have their own state (when they do, it’s UI state rather than data).Examples: Page, Sidebar, Story, UserInfo, List.
Syntax is similar to any component UI created using React.

->Container Components
Concerned with how data flows. Maintaining state and redux data flow. Subscribe to redux state, dispatch actions.

Redux library's connect() function, which provides many useful optimizations to prevent unnecessary re-renders. 
To use connect(), you need to define a special function called mapStateToProps that tells how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping. 

We define the container component for a presentational component either in a separate file or inside the presentational component itself. To keep the code understandable and reusable, we will create another folder containers with same name as presentational component suppose list.js. 

Syntax:

        const List = (arg1, arg2) => {
        switch (arg) {
          case 'one':
            return state_obj.key(t => t.completed)
          default:
            return state
        }
      }

We define two functions to link the UI components(Presentational) to Container components.

Syntax: mapStateToProps is a function used to map the state(current state) to props to be used for presentational component using state as a parameter.

      const mapStateToProps = state => {
        return {
          state-obj: List(state.obj, state.arg1)
        }
      }
      
Syntax: mapDispatchToProps is a function which uses dispatch() as a parameter to map dispatch to props for injection into presentational component.
  
      const mapDispatchToProps = dispatch => {
      return {
        onTodoClick: arg => {
          dispatch(actionname(arg))
        }
      }
    }
      
Now, we just need to connect the presentational component to container component using 'connect'. After the connection, we can use the container component wherever we want to use since the container will already be connected to presentational component.

Syntax: 

     export const VisibleTodoList = connect(
                    mapStateToProps,
                    mapDispatchToProps
                  )(List)


5.Store

The Store is the object that brings them together. The store has the following responsibilities:

->Holds application state;

->Allows access to state via getState();

->Allows state to be updated via dispatch(action);

->Registers listeners via subscribe(listener);

->Handles unregistering of listeners via the function returned by subscribe(listener).

Syntax to create store using createStore(Component)

          import { createStore } from 'redux'
          import mainreducer from './reducers'
          const store = createStore(component)
          
To dispatch actions,

Syntax:

      store.dispatch(actionname('Learn about actions'))

      
