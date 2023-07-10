import React from 'react'
import ReactDOM from 'react-dom/client'
import Details from './Details.jsx'
import List from './List.jsx'
import Song from './Song.jsx'
import Tour from './Tour.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <>
    <Details/>
    <List/>
    <Song/>
    <Tour/>
    </>
  </React.StrictMode>,
)
