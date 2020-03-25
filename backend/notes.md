# OMNISTACK 11
#### Anotações
###### Tipos de parâmetros:

* Query Params:
  * Tem nome e são enviados pela url. 
  * Formato na url: 'rota' '?' 'nome' '=' 'valor' '&' 'nome' '=' 'valor' ...
  * Utilização: filtros, paginação
* Routes Params:
  * São enviados pela url.
  * Formato na url: 'rota' '/' 'valor'
  * Formato no código: 'rota' '/' ':' 'nome'
  * Utilização: identificação
* Request Body:
  * São enviados pelo corpo da requisição
  * Utilização: criação, alteração


###### Bancos de dados
Query Builder: Construtor de queries. Abstrai a sintaxe para que a mesma possa ser utilizada em diferentes bancos com diferentes sintaxes 
* SQL
  * Exemplos: MySQL, SQLite
* NoSQL:
  * Exemplos: MongoDB, CouchDB 