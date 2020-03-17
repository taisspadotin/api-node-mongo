const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// list
exports.listMentions = async (req, res) => {
  try {
    const data = await Mentions.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar as menções.'});
  }
};

// create
exports.createMention = async (req, res) => {
  try {
	 console.log(req.body);
	 let corpo = (req.body);
	 //console.log(JSON.parse(corpo));
	 var fim = JSON.parse(corpo);
	//console.log(fim.friend);
    const mention = new Mentions({
      friend: fim.friend,
      mention: fim.mention
    });

    //console.log(mention)

    await mention.save();

    res.status(201).send({message: 'Menção cadastrada com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a menção.'});
  }
};
