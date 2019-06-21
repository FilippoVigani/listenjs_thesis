app.addHook('preHandler', (request, reply, next) => {
	const urlData = request.urlData()
	const path = urlData.path
	reply.notify = function(payload){
		console.log(`Notifying ${path} of updated data!`)
		listen.notify(path, payload)
	}
	reply.notifyDelete = function(){
		console.log(`Notifying ${path} of deleted data!`)
		listen.notify(path, null)
	}
	const parentPath = urlData.path.split('/').slice(0, -1).join('/')
	reply.notifyParent = function(payload){
		console.log(`Notifying ${parentPath} of updated data!`)
		listen.notify(parentPath, payload)
	}
	next()
})