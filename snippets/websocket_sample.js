/* Initiate new WebSocket handshake */
const socket = new WebSocket(`ws://${location.host}/api/appointments`)

socket.onopen = event => {
	socket.send('Hello server!')
}

socket.onmessage = message => {
	/* Parse response */
	const appointments = JSON.parse(message.data)
	/* Update UI */
	this.setState({
		appointments: appointments
	})
}

socket.onerror = error => {
	/* Handle error */
	this.setState({
		error: error
	})
}