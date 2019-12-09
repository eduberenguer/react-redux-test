import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './page'

class Results extends React.Component{

    render(){
        return(
            <Page 
                results={this.props.results.length ? this.props.results : ''}
                goTo={(path) => this.props.history.push(path)}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        results: state.currentItem,
    }
}

export default withRouter(connect(mapStateToProps)(Results))