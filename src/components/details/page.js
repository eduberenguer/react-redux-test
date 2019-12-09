import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'
import AppBar from '../appBar'
import Button from '@material-ui/core/Button'

class Page extends React.Component{
    
    render(){
        const {
            currentItem,
            goTo
        } = this.props

        return(
            <Fragment>
                <CssBaseline />
                <AppBar />

                <div className='results-page'>
                    <Paper
                        elevation={1}
                        className='paper-container'
                    >
                        {
                            currentItem ? 
                            <Fragment>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    {currentItem.title}
                                </Typography>
                                <div
                                    className='item-image'
                                    style={
                                        {backgroundImage: `url(${currentItem.image})`}
                                    }
                                ></div>
                                <Typography gutterBottom component='p' className='content'>
                                    {currentItem.content}
                                </Typography>
                            </Fragment>
                            : <CircularProgress className='item-loader' />
                        }

                        <Button color='primary' onClick={() => goTo('/results')}
                        >
                            Back
                        </Button>
                    </Paper>
                </div>
            </Fragment>
        )
    }
}

export default Page