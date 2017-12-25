var mongoose = require('mongoose');

var WalletSchema = new mongoose.Schema({
  name: String,
  age: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Wallet', WalletSchema);
