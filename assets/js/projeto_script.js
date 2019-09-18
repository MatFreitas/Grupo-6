document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
    let value = params['key']
    let value_linha = params['key2']

	let db = coDesConnect('https://portfolio-engenharia1.firebaseio.com')

	db.download('/', function(data) {

		context = data['portfolio'][value]['projetos'][value_linha]
		coDesReplace('.materiais', context)

		context = data['portfolio'][value]['projetos'][value_linha]
		coDesReplace('.child-1', context)
		

  })
})