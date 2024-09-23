import React from "react";
import './App.css'
import LoginButton from "cms/LoginButton"
// const LoginButton = React.lazy(() => import("cms/LoginButton"));

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <LoginButton/>
      </div>
      
    </>
  )
}

export default App
