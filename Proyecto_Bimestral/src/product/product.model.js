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
    existence: {
        type: Number,
        require: [true, 'Existence is necessary'],
    },
    state: {
        type: Boolean,
        default: true,
    }
});

ProductSchema.methods.toJSON = function(){
    const { _v, _id, ...product} = this.toObject(); //Aqui le quite el password por si da un error
    product.uid = _id;
    return product;
}

export default mongoose.model('Product', ProductSchema);