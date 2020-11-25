// Por meio do destructuring podemos extrair valores de arrays e objetos de uma forma mais simples e direta.

const language = "C;Dennis Ritchie;1972".split(";");

console.log(language); // ==> [ 'C', 'Dennis Ritchie', '1972' ]

// É possivel extrair os valores de um array criando variaveis em ordem, de acordo com a posição de cada elemento

//Podemos ignorar um elemento do array deixando de estabelecer um nome para a variável

let [, author, year] = language;

console.log(author, year);

//  assim como nas funções, é possivel definir valores para cada uma das variáveis.

[name = "-", author = "-", year = "-"] = language; 
// No caso de não ter valres no array para a posição esse sera substituido pelo -


// Para extrair os valores de um objeto é necessário referenciar a chave de cada uma das propriedades

const languageObj = {
  name: "C",
  author: "Dennis Ritchie",
  year: 1972,
  company: {
    name:"Bell Labs"
  }
};

const{name, author, year} = languageObj;
console.log(name, author, year); // ==> C, Dennis Ritchie, 1972

// É possivel definir nomes diferentes para as variáveis em relação as chaves das propriedades do objeto.

const {name: n, author: a, year: y} = languageObj;
console.log(n, a, y); // ==> C, Dennis Ritchie, 1972

// Também podemos referenciar as propriedades de objetos que estão dentro de outros objetos

const {name: n, author: a, year: y, company:{name: c}} = languageObj;
console.log(n, a, y, c);

// Podemos aplicar destructuring também nos parâmetrosde uma função, tanto com arraysquanto com objetos
const sum = function([a, b]){
  return a + b;
};
sum([2, 2]); // ==> 4

const subtract = function({a, b}){
  return a - b;
};
subtract({a:2, b:2}); // ==> 0






