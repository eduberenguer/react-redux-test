import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import './styles.css'

class Page extends React.Component{
    
    render(){
        const {
            results,
            goTo
        } = this.props

        const isEmpty = results.length === 0

        return(
            <Fragment>
                <CssBaseline />
                <AppBar />

                <div className='results-page'>
                    {
                        isEmpty 
                        ? 'There are no results' 
                        : results.map(item => (
                            <div
                                key={item.id}
                                className='card-container'
                            >
                                <Card className='card' onClick={() => goTo(`/details/${item.id}`)} >
                                    <CardActionArea>
                                        <CardMedia className='card-media' image={item.image} title={item.title} />
                                    </CardActionArea>
                                    <CardContent>
                                        {item.title}
                                        {item.content}
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </div>

            </Fragment>
        )
    }  
}

export default Page