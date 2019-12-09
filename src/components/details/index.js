import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Page from './page'
import findCurrentItem from '../../redux/actions/findCurrentItem'

class Details extends React.Component{

    componentDidMount(){
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId))
    }

    render(){
        return(
            <Page 
                currentItem={this.props.currentItem}
                goTo={(path) => this.props.history.push(path)}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    }
}

const mapDispatchToProps = {
    findCurrentItem
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details))