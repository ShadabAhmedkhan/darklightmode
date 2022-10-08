import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import AppCss from "../src/App.css"

export default function App() {
    const [darkMode,setdarkMode] = React.useState(true)
    function toggleDarkMode(){
        setdarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar toggleDarkMode={toggleDarkMode}  darkMode={darkMode}/>
            <Main  darkMode={darkMode}/>
        </div>
    )
}