import React, {Component} from 'react'

import PropTypes from 'prop-types';

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
           clicks:this.state.clicks+1 
        })
    }

    render(){
        return(
            <h1 onClick={this.updateClicks}>Welcome to {this.props.name} website ({this.state.clicks}) - {this.props.year}</h1>
        )
    }
}

Welcome.propTypes={
    name:PropTypes.string.isRequired,
    year:PropTypes.number,
    password(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
          return new Error(`${propName} was too short`)
        }
      }
}

Welcome.defaultProps={
    year:2020
}

export default Welcome;