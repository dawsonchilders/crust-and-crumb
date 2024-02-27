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
  createdOn: {
    type: Date,
    required: true
  },
  feedingSchedule: {
    type: String,
    required: true
  },
  hydrationLevel: {
    type: Number,
    required: true
  },
  flourType: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
});


module.exports = mongoose.model('Starter', starterSchema);