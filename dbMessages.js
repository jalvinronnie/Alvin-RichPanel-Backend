import mongoose from 'mongoose'

const richpanelSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messagecontents', richpanelSchema)