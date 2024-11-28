react - ui lib
redux - state management lib
react-redux - redux UI binding lib

state - holds state of app
action - desc changes in app
reducer - carries out that change in state basis on action

principle

- maintain state in a single object managed by redux store
- only way to change state is to emit an action, obj desc what happened
- update a state of app, write pure reducers

middle ware

- 3rd party extension between point of dispatching an action and it reaches reducer
- log, crash report, async op
