app.post('/appointments', function (request, reply) {
	const appointment = request.body
	const appointments = controller.postAppointment(appointment)

	listen.notify(request.urlData.path, appointments)

	reply.send(200)
})