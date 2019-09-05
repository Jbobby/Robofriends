import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../action';

const mapStateToProps = state=> {
    return {
        searchfield: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users })); 

    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if ( !robots.length ) {
            return <h1>Loading</h1>
        } else{
            return ( 
                <div className='tc'>
                    <h1 className= 'f2'> RoboFriends </h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(App);

