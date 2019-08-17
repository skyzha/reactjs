import React, {Component} from 'react'
import avatar from './avatar3.png'
import Btn from './Button'

class Head extends Component {
    render() {
        return (
            <div>
                <img src={avatar} />
                <h3>Subject: Remember Me</h3>
                <h3>From Borge Refsnes, Sep 27, 2015.</h3>
                <Btn name={'Forward'} />
                <Btn name={'Reply'} />
            </div>
        )
    }
}

export default Head;