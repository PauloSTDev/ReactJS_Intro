import React from "react"
import ReactDOM from "react"
import "./styles.css"

/*const App = () => {
function sum(a, b){
    return a + b
}


function primeiroJSX() {
    return(
        <div className="teste">
            Paulo Santos
        </div>
    )
}

    return (
        <div className="App">
            Hello World
            {primeiroJSX()}
            <h1>Soma: {sum(10, 30)}</h1>
        </div>
    )
}*/

const element = "Digital Innovation"
const element2 = <div>Olá Gurizada</div>

function App() {
    return(
        <div>
            {element}
            {element2}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)