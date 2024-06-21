const mongoose = require('mongoose')

const countSchema = mongoose.Schema(
    {
        count: {
            type: Number,
            required: true,
            default: 0
        },
        time: {
            type: Number,
            required: true,
        },
        avg: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Run = mongoose.model('Runs', countSchema); //sabse left mein jo hai that is going to hold 
// the model returned by monogoose.model

module.exports = Run;