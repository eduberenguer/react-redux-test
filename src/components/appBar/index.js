import React from 'react'
import Page from './page'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import findSuggestions from '../../redux/actions/findSuggestions'
import findResults from '../../redux/actions/findResults'

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
        this.setState({text})
        this.props.findResults(text)
        this.props.history.push('/results')
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
        suggestions: state.currentItem
    }
}
    
const mapDispatchToProps = {
    findSuggestions,
    findResults
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(appBar))