const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const starterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  notes: [{
    type: String,
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
});


module.exports = mongoose.model('Starter', starterSchema);