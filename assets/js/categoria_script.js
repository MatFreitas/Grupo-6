document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
    let value = params['key']

	let db = coDesConnect('https://portfolio-engenharia1.firebaseio.com')

	db.download('/', function(data) {

		for(let key in data) {	

			console.log(data[key])
	  	}

		context = data['portfolio'][value]
		coDesReplace('.categoria_x', context)


		context = data['portfolio'][value]
		coDesReplace('.apres', context)

		context = data['portfolio'][value]
	    context['categoria'] = value
		coDesReplace('.projetos', context)
	
  })
})