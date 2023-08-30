const {model,Schema} = require("mongoose")

const UsuarioSchcema = new Schema({
    nombre:"string",
    required: true,
},
{
    apellido:"string",
    required: true,
}
)

module.exports = model("usuarior",UsuarioSchcema)