import React, { Component } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/searchbox";
import "./app.css"
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/errorboundary";

class App extends Component  {

    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({robots:users})
        );
    }


    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value })
    }

    render () {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })

        return !robots.length ?
            <h1>LOADING</h1> :
            (
                <div className="appwrapper">
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>

                </div>

            )

        }
    }

export default App;