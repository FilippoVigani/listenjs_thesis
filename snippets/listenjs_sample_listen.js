this.appointmentsListener = listen(
	BASE_URI,
	data => {
		this.setState({
			data,
			loading: false,
		})
	})