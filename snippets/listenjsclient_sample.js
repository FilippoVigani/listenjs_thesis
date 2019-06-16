const URI = '/api/appointments'

listen(
	URI,
	appointments => {
		/* Handle new data update */
		this.setState({
			appointments: appointments
		})
	}
)