import mongoose, { Schema } from 'mongoose'

var rolSchema = new Schema(
    {
        rol:
        {
            type : String,
            required : true,
            trim : true
        }
    },
    {
        timestamps : true
    });

export default mongoose.model("Rol", rolSchema);