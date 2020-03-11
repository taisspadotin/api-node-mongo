# APINodeJS
API em Node para se utilizar com react utilizando MongoDB

->instalar os componentes npm install

## Como usar:
### `Parte a ser usado para receber os dados:`
var myHeaders = new Headers();
		var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
			   
		fetch('http://localhost:3001/mentions', myInit)
		.then(function(response) {
		 console.log(response);
		})
    
    
### `Parte a ser usada para enviar os dados:`
let enviar = {
		friend: "ola3",
		mention: "oiii"
		};
		
		fetch('http://localhost:3001/mentions', {
			method: 'post',
			body: JSON.stringify(enviar)
		  }).then(function(response) {
			console.log(response.json());
		  });



Passo a passo em: https://woliveiras.com.br/posts/construindo-uma-api-com-node-js-parte-1-criando-e-listando-dados/
