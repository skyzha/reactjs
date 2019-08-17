import React, {Component} from 'react'

class Button extends Component {
    render() {
        const name = this.props.name
        return (
            <button>{name}</button>
        )
    }
}

export default Button;