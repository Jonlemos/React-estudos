import React, {Component} from 'react'

export default class Counter extends Component {
    state = {
        numero: this.props.numeroInicial
    }
    
    oneMore = () => {
        this.AlternateNumber(1)
        // this.setState({numero: this.state.numero + 1})
        // this.state.numero++
    }
    noMore = () => {
        this.AlternateNumber(-1)
        // this.setState({numero: this.state.numero - 1})
    }
    AlternateNumber = ( difference) => {
        this.setState({
            numero: this.state.numero + difference
        })
    }
    render() {
        return (
            <div>
                <div>Número {this.state.numero}</div>
                <button onClick={this.oneMore}>Inc</button>
                <button onClick={this.noMore}>Dec</button>
                <button onClick={() => this.AlternateNumber(10)}>Inc10</button>
                <button onClick={() => this.AlternateNumber(-10)}>Dec10</button>
            </div>
        )
    }
}


//Solução 1 - Função bind
// constructor(props){
//     super(props)
//     this.oneMore = this.oneMore.bind(this)
// }
//Solução 2 -função arrow no onclick
//* <button onClick={() => this.oneMore()}>Inc</button> */
//Solução 3 -função arrow
// oneMore = () => {
//     this.props.numero++
// }