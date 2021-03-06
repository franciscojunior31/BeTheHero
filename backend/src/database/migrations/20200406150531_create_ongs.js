
exports.up = function(knex) {         // métado up - sempre para a criação de uma tabela
  return  knex.schema.createTable('ongs', function (table)  {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();


    });
  
};

exports.down = function(knex) {
return knex.schema.dropTable('ongs');  // métado down - deletar uma tabela, precisar voltar atrás da criação de uma table

  
};
