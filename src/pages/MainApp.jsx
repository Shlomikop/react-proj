import React, { Component } from 'react'
import {allocationService} from '../services/allocationService.js'

export class MainApp extends Component {

    state = {
        data: ""
    }
    componentDidMount() {
        this.loadJSON()
    }

    loadJSON = () => {
        const data = allocationService
        this.setState({ data })
    }

    render() {

        return (
            <div >
                <p>hi</p>
            </div>
        )
    }
}
