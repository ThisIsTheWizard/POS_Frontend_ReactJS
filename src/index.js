import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// AppState From Context API
import AppState from './context/State'

// Main Components
import App from './App'

// Main Styles
import './assets/scss/theme.scss'
import 'react-toastify/dist/ReactToastify.css'

// Apollo GraphQL Provider And Client
import { ApolloProvider } from '@apollo/client'
import client from './api/graphql'

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AppState>
        <App />
      </AppState>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals'
// reportWebVitals(console.log)
