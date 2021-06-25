import React, { Component } from 'react'
import { resetStore } from './CustomReducerEnhancer';
import { startCreatingProduct } from './StateActions';

export default class StoreAccess extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.buttonRef = React.createRef()
    }
    handleDataStoreChange = () => {
        console.log(this.props.store.getState());
    }
    componentDidMount = () => {
        this.unsubscriber = this.props.store.subscribe(() => this.handleDataStoreChange())
    }
    componentWillUnmount() {
        this.unsubscriber()
    }
    dispatcher = () => {
        this.props.store.dispatch(startCreatingProduct())
    }

    reseting = () => {
        this.props.store.dispatch(resetStore())
    }

    dispatchAction = () => {
        this.buttonRef.current.disabled = true
        this.props.store.dispatchAsync(resetStore())
            .then(data => this.buttonRef.current.disabled = false)
    }
    render() {
        return (
            <>
                <button onClick={this.dispatcher}>Dispatcher</button>
                <button onClick={this.reseting}>Reset</button>
                <button onClick={this.dispatchAction} ref={this.buttonRef} className="btn btn-primary">Enhancer</button>
                <div className="bg-info">
                    {JSON.stringify(this.props.store.getState(), null, 4)}
                </div>
            </>
        )
    }
}
