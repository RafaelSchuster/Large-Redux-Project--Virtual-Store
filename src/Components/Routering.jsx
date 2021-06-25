import React, { Component } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import IsolatedTable from './IsolatedTable'

export default class Routering extends Component { //Web Services Chapter
    render() {
        return (
            <Router>
                <div>
                    <Link to='isolated'>Isolated</Link>
                    <Route path='/isolated' component={IsolatedTable} />
                </div>
            </Router>
        )
    }
}
