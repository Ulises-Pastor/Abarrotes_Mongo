import mongoose, { Schema } from 'mongoose'

var productoSchema = new Schema(
    {
        descripcion:
        {
            type : String,
            required : true,
            trim : true
        },
        unidades:
        {
            type : Number,
            required : true
        },
        precio_costo:
        {
            type : Number,
            required : true
        },
        precio_venta:
        {
            type : Number,
            required : true
        },
        categoria_id:
        {
            type : Schema.Types.ObjectId,
            ref : 'Categoria',
            required : true
        }
    },
    {
        timestamps : true
    });

export default mongoose.model("Producto", productoSchema);