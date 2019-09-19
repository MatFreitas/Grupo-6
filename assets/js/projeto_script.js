document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
    let value = params['key']
    let value1 = params['key1']

	let db = coDesConnect('https://portfolio-engenharia1.firebaseio.com')

	db.download('/', function(data) {


		context = data['portfolio'][value1]['projetos'][value]
		coDesReplace('.projeto_x', context)

		context = data['portfolio'][value1]['projetos'][value]
		coDesReplace('.paragraph', context)

		context = data['portfolio'][value1]['projetos'][value]
		coDesReplace('.topicos', context)

		context = data['portfolio'][value1]['projetos'][value]
		coDesReplace('.nova', context)

		context = data['portfolio'][value1]['projetos'][value]
		coDesReplace('.child-1', context)


  })
})