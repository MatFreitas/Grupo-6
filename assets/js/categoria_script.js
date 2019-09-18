document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
    let value = params['key']

	let db = coDesConnect('https://portfolio-engenharia1.firebaseio.com')

	db.download('/', function(data) {

		context = data['portfolio'][value]
		coDesReplace('.child-1', context)
		

  })
})