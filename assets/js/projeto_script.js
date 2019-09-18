document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
    let value = params['key']

	let db = coDesConnect('https://portfolio-engenharia1.firebaseio.com')

	db.download('/', function(data) {

		context = data['portfolio'][value]['projetos'][value2]
		coDesReplace('.child-1', context)
		
  })
})