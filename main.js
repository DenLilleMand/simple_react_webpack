import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

//getElementById henviser til et element i vores html,
//der har id'et app, som react så renderer sit html inde i.
ReactDOM.render(<App />, document.getElementById("app"))

