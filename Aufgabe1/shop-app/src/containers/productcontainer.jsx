import React, { Component } from 'react'

import { Container, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from '../utils/styles'
import Product from '../components/product'



class ProductContainer extends Component {
    constructor(props) {
        super(props)

        this.QueryResult = require('../utils/data.json')
    }

	render() {
        const { classes } = this.props

		return(
            <div className={classes.root}>
                <Container fixed>
                    <Grid container spacing={4}>
                        {this.QueryResult.map(entry => {return (<Grid item xs={4}><Product id={entry.id} name={entry.name} description={entry.description} image={entry.description} data={entry.data} /></Grid>)})}
                    </Grid>
                </Container>
            </div>
		)
	}
}

export default withStyles(styles)(ProductContainer)
