import React, { useState, useEffect } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import '../containers/App.css'
import Scroll from "../components/Scroll";
import ErrorBoundary from '../components/ErrorBoundary'

function App() {

    const [robots, setRobot] = useState([])
    const [searchfield, setSearchFiedl] = useState('')
    const [count,setCount] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => { setRobot(users) })
        console.log(count)
    },[count])

    const onSearchChange = (event) => {
        setSearchFiedl(event.target.value)
    }

    const robotList = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
  
    return !robots.length ?
        (<div className="tc">
            <h1 className="f1">Loading</h1>
        </div>)
        : (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <button onClick={()=> setCount(count+1)}>Click Me</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={robotList} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )


}

export default App