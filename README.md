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

4.Containers
5.Store


