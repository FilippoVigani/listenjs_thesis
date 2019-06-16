/* Open new EventSource connection */
const source = new EventSource('/api/appointments')

source.onmessage = event => {
	/* Parse response */
	const appointments = JSON.parse(event.data)
	/* Update UI */
	this.setState({
		appointments: appointments
	})
}

connection.onerror = error => {
	/* Handle error */
	this.setState({
		error: error
	})
}