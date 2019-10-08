

## Lab 36 Redux

### Author: Alvian Joseph

### Links and Resources
* [repo](https://github.com/alvian-401-advanced-javascript/lab-36-redux)
* [Sandbox](https://codesandbox.io/s/starter-code-app-state-reducers-52hkd)

### Modules
#### React Components
##### `index.js`
Entry point for React application. Imports `app.js`

##### `app.js`
* Imports the `connect` function from 'react-redux'.
* maps the `app` state defined by the `app-reducer` to `props.app`.
* Renders `this.props.app.name`
*  `onClick` - runs `this.changeMyName`, which runs the connected action in `app-actions`. 



##### `numbers.js`
* Imports the `connect` function from 'react-redux'.
* Gets state from the Redux store and maps it to `props.number`.
* Renders `props.numbers.currentNumber
*  `onClick` - runs `props.handleReset`, which runs the connected action in `numbers-actions`. 


#### UML
![UML Diagram]()
