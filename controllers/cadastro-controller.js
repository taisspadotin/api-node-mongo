const mongoose = require('mongoose');
const Cadastro = mongoose.model('cadastro');

// list
exports.listaCadastro = async (req, res) => {
  try {
    const data = await Cadastro.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os cadastros.'});
  }
};

// create
exports.criaCadastro= async (req, res) => {
  try {
	 console.log(req.body);
	 let corpo = (req.body);
	 //console.log(JSON.parse(corpo));
	 var fim = JSON.parse(corpo);
	//console.log(fim.friend);
    const cadastro = new Cadastro({
      nome: fim.nome,
      user: fim.user
    });

    //console.log(mention)

    await cadastro.save();

    res.status(201).send({message: 'Cadastro realizado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
