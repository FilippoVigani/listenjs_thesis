/* Start long polling */
fetchAppointmentsAndUpdateUI()

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
		/* Restart long polling */
		fetchAppointmentsAndUpdateUI()
	})
	.catch(error => {
		/* Handle error */
		this.setState({
			error: error
		})
	})
}