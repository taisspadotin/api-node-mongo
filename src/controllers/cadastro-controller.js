const mongoose = require('mongoose');
const Cadastro = mongoose.model('cadastro');

// listar
exports.listaCadastro = async (req, res) => {
  try {
	//paginação
	/*let url = require('url');
	var q = url.parse(req.url, true).query;
	var registros = q.registros;
	console.log(registros);
	//a paginacao é feita por 5 registros 
	
    const data = await Cadastro.find({}).limit(5).skip(5*registros);
	
    
	/*const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10
}
console.log(pageOptions);*/
//res.status(200).send(data);
const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10
}
/*Cadastro.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
		
		let resp = res.json({
                total: Cadastro.count(),
                page: parseInt(req.query.page, 10) || 0,
                pageSize: parseInt(req.query.limit, 10) || 10,
                books:doc,
            });
			console.log(resp);
        res.status(200).json(doc);
    });*/
	let resp= '';
	Cadastro.countDocuments({},function(err,count){
  Cadastro.find({}, null, {
    sort: {
      Name: 1
    }
  }).skip(pageOptions.page  > 0 ? ((pageOptions.page  - 1) * pageOptions.limit) : 0).limit(pageOptions.limit).exec(function(err, docs) {
    if (err)
      res.json(err);
    else
     resp = {
        "TotalCount": count,
		"paginas": Math.ceil(count/pageOptions.limit),
        "_Array": docs
      };
	  //console.log(resp);
	  res.status(200).json(resp);
  });
 });
	
	
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os cadastros.'});
  }
  
  
  
};

// criar
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

//deletar
exports.deletaCadastro= async (req, res) => {
  try {
		let url = require('url');
		var q = url.parse(req.url, true).query;
		var id = q.id;
		console.log(id);
		var myquery = { '_id': id };
		
		Cadastro.deleteOne(myquery, function(err, obj) {
		if (err) throw err;
		console.log("1 document deleted");
   
  });
    res.status(201).send({message: 'Cadastro deletado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao deletar o cadastro.'});
  }
};