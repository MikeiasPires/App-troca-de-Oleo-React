import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main/Main'

 
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  </React.StrictMode>
)
