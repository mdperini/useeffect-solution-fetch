import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const dark = 'dark'
const light = 'light'

/*
    INSTRUCTIONS:
    Convert the code below from a Class component
    using setState to s function component using the 
    useState Hook.
*/


const Theme = () => {
    const [theme, setTheme] = React.useState('light')

    const toDark = () => setTheme(dark)
    const toLight = () => setTheme(light)

    return (
        <div className={theme}>
            {theme === light
                ? <button onClick={toDark}>🔦</button>
                : <button onClick={toLight}>💡</button>}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Theme />, rootElement);