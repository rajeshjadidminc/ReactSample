import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import '../containers/App.css'
import Scroll from "../components/Scroll";
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) })

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield}  = this.state
        const robotList = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !this.state.robots.length ?

            (<div className="tc">
                <h1 className="f1">Loading</h1>
            </div>)
            : (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                        <Cardlist robots={robotList} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )

    }
}

export default App