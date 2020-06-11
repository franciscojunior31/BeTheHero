const crypto = require('crypto');
const connection = require('../database/connection'); 

module.exports = {

    async index (request, response)  {  
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
   
    },
    async create (request, response) {
       
        // const params = request.query; // Query - todos os paramentos enviados vao estar aqui
        // const params = request.params; // Params - Apenas um unico recurso: EX :ID
    
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
       await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({id});
    }
   
};