const POLL_RATE = 5000

/* Start polling */
setTimeout(() => {
	fetchAppointmentsAndUpdateUI()
}, POLL_RATE)

function fetchAppointmentsAndUpdateUI(){
	fetch('/api/appointments')
	.then( response => {
		return response.json()
	})
	.then( appointments => {
		/* Update UI */
		this.setState({
			appointments: appointments
		})
	})
}