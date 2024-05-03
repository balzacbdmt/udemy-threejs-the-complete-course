import React from 'react'
import ReactDOM from 'react-dom/client'
import Cube from './Cube.jsx'
import Plane from './Plane.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Cube /> */}
    <Plane />
  </React.StrictMode>,
)
