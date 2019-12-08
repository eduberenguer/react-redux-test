import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import findSuggestions from '../../redux/actions/findSuggestions'

class appBar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            text : ''
        }
    }

    onChangeText = text => {
        this.setState({text})

        this.props.findSuggestions(text)
    }

    onChangeSelection = text => {
    }

    render(){
        return(
            <Page 
                text = {this.state.text}
                suggestions = {this.props.suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        suggestions: state.suggestions
    }
}

const mapDispatchToProps = {
    findSuggestions
}

export default connect(mapStateToProps, mapDispatchToProps)(appBar)