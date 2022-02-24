const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftModel = new Schema({
  tokenId: { type: Number, required: true, unique: true },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

nftModel.set('toJSON', { getters: true });
nftModel.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.__v;
  return obj;
};
module.exports = mongoose.model('nft', nftModel);
