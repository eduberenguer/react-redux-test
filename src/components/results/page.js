import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'

class Page extends React.Component{
    
    render(){
        return(
            <Fragment>
                <CssBaseline />
                
                <AppBar />
            </Fragment>
        )
    }  
}

export default Page