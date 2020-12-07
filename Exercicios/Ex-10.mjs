/**
Crie um módulo chamado "database.mjs"

Mova as classe "Database", "Parser" e "DatabaseError" para o módulo
"database.mjs"

Exporte a classe "Database"

Importe a classe "Database" no main.mjs

Mova as classes "Parser" e "DatabaseError" para seus próprios módulos
realizando o mesmo procedimento feito na classe "Database"

*/

import {Database} from "./Database";

try {
  const database = new Database();
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)")
  database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
  database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
  database.execute("delete from author where id = 2")
  console.log(JSON.stringify(database.execute("select name, age from author"), undefined, " "));
  //console.log(JSON.stringify(database.execute("select name, age from author where id = 2"), undefined, " "));
} catch (e) {
  console.log(e.message)
}








