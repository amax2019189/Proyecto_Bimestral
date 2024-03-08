import mongoose, { Schema } from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'The name is required'],
    },
    description: {
        type: String,
        require: [true, 'The description is mandatory'],
    },
    price: {
        type: Number,
        require: [true, 'The price is mandatory'],
    },
    stock: {
        type: Number,
        require: [true, 'Existence is necessary'],
    },
    state: {
        type: Boolean,
        default: true,
    },
    size: {

    },
    color: {

    },
    gender: {

    },
    amount: {
        
    }
});

export default mongoose.model('Product', ProductSchema);