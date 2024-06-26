import mongoose, { Schema } from 'mongoose'

var categoriaSchema = new Schema(
    {
        categoria:
        {
            type : String,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    });

export default mongoose.model("Categoria", categoriaSchema);