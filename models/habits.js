const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: 
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status',
    }
  ]
}, {
  timestamps: true
}
)



const Habits = mongoose.model('habits', habitSchema);

module.exports = Habits;