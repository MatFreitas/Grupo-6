document.addEventListener('DOMContentLoaded', function() {

	let db = coDesConnect('https://portfolio-engenharia1.firebaseio.com')

	db.download('/', function(data) {

		for(let key in data) {	

			console.log(data[key])
	  	}
			
		coDesReplace('.paragraph', data)
  })
})