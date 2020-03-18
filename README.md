# APINodeJS
API em Node para se utilizar com react utilizando MongoDB

->instalar os componentes npm install

## Como usar:
### `Parte a ser usado para receber os dados:`
 Rodar no terminal: npm run dev
 acessar: localhost:3001

var myHeaders = new Headers();
		var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
			   
		fetch('http://localhost:3001/mentions', myInit)
		.then(function(response) {
		 console.log(response);
		})
OU:

axios.defaults.baseURL = 'http://localhost:3001/cadastro';
		axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.get(serviceUrl, onSuccess, onFailure)
		
		.then(resp => {
			let d = (resp.data);
			this.setState({registros: d})
			//console.log(resp.data);
			
		})
		.catch(error => {
			console.log(error);
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

A api é utilizada em conjunto com o projeto exibicao.

Passo a passo em: https://woliveiras.com.br/posts/construindo-uma-api-com-node-js-parte-1-criando-e-listando-dados/
