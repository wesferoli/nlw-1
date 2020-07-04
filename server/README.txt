** TODAS ANOTAÇÕES PARA ESTUDO **

- Rota: Endereço completo da requisiçao
- Recurso: Qual a entidade enstamos acesando do sistema

- request param: Parâmetros que vem dentro da própria rota e que identificam recursos (Utilizado quando a
  busca é obrigatória)
- query param: Parâmetros que vem dentro da própria pagina, geralmente não obrigatórios, 
  que servem para filtros e paginações (Utilizado para buscas opcionais (filtros))
- body param: Utilizado para inserção de dado e atualizações

- SELECT * FROM user WHERE name = 'Diego'
- knex('users').where('name', 'Diego').select('*')

- Migrations são o histórico do banco de dados

- index() = Listagem de registros
- show() = Exibir único registro
- create() = Criar registros
- update() = Atualizar registros
- delete() = Remover registros

