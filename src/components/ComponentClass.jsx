import React, {Component} from 'react'

export default class ComponentClass extends Component {
    render() {
        return (
            <h1>{this.props.value || 'Ou o Valor padrão'}</h1>
        )
    }
}