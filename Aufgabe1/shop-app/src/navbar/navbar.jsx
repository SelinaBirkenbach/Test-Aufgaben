import React, { Component } from 'react'

import { AppBar, Toolbar, Typography, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from '../utils/styles'


class Navbar extends Component {
	render() {
		const { classes } = this.props

		return(
			<div className={classes.root}>
				<AppBar className={classes.navbar}>
					<Toolbar>
						<Typography variant="h6">Beratung & Zulassung</Typography>
						<Box m={5} />
						<Typography variant="h6">Produkte</Typography>
						<Box m={5} />
						<Typography variant="h6">Weiterbildung & Veranstaltungen</Typography>
						<Box m={5} />
						<Typography variant="h6">Über uns</Typography>
						<Box m={5} />
						<Typography variant="h6">Fachartikel</Typography>
					</Toolbar>
				</AppBar>
				<Box m={12} />
			</div>
		)
	}
}

export default withStyles(styles)(Navbar)
