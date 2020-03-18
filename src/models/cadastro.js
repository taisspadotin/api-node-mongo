const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('cadastro', schema);
