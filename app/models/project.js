import mongoose from 'mongoose';
const Schema  = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    year: Number,
    description: String,
    picture: String,
    postDate: {type: Date, default: Date.now}
});

export default mongoose.model('Project', projectSchema);