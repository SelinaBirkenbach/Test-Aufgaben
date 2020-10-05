import React, { Component } from 'react'

import { Box, Container, Typography }  from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from '../utils/styles'


class Footer extends Component {
	render() {
		const { classes } = this.props

		return(
			<div className={classes.root}>
				<Box m={6} />
				<Container fixed>
					<footer className={classes.footer}>
						<Box display="flex" justifyContent="center" alignContent="center" p={2}>
							<Typography variant="body1" className={classes.footer_text}>
								Kontakt & Impressum
							</Typography>
						</Box>
					</footer>
				</Container>
			</div>
		)
	}
}

export default withStyles(styles)(Footer)
