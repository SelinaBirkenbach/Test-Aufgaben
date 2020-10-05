import React, { Component } from 'react'

import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from '../utils/styles'


class Product extends Component {
    constructor(props) {
        super(props)

        this.id = props.id
        this.name = props.name
        this.description = props.description
        this.image = props.image
        this.data = props.data
    }

	render() {
        const { classes } = this.props

		return(
            <div className={classes.root}>
                <Card style={classes.card}>
                    <CardActionArea>
                        <CardMedia image={this.image} title="Contemplative Reptile"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.name}
                            </Typography>
                            <Typography variant="body2" color="initial" component="p" align="justify">
                                Produktbeschreibung: {this.description}
                            </Typography>
                            <br /><br /><br />
                            <Typography variant="subtitle1" color="inherit" component="p">
                                Preis: {(this.data.preis / this.data.menge).toFixed(2)}€ / Stück
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">Details</Button>
                        <Button size="small" color="primary">In den Warenkorb</Button>
                    </CardActions>
                </Card>
            </div>
		)
	}
}

export default withStyles(styles)(Product)
