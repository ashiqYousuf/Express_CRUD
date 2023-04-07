import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , 'A student must have name'],
        trim: true,
    },
    age: {
        type: Number,
        required: [true , 'A student must have age'],
        min: 10,
        max: 40,
    },
    fees: {
        type: mongoose.Decimal128,
        required: [true , 'A student must have fees'],
        validate: (value) => value >= 100,
    }
});

const Student = mongoose.model('Student' , studentSchema);
export default Student;
