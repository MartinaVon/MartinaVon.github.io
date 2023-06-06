import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style/style.css"
import { Main } from './componentes/main/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './componentes/Header/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
