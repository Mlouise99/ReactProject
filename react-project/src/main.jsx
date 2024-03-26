import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: 'Click here to visit google'
};
const AnotherElement = (
  < a href='https://google.com' target='_blank'> Visit Google </a>
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  AnotherElement
) 
