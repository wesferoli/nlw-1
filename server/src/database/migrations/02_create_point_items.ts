import Knex from 'knex';

// Cria a tabela
export async function up(knex: Knex) {

    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.string('points_id')
            .notNullable()
            .references('id')
            .inTable('points');
            
        table.string('items_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });

};

// Volta atrás (Ctrl+Z / Deleta tabela)
export async function down(knex: Knex) {
    
    return knex.schema.dropTable('point_items');

};