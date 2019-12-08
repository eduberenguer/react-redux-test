import React from 'react'
import { connect } from 'react-redux'
import Page from './page'

class Results extends React.Component{

    render(){

        console.log(this.props);

        return(
            <Page suggestions={this.props.suggestions}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
        hola: '123'
    }
}

export default connect(mapStateToProps)(Results)