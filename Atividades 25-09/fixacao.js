/* 1) Criar 3 variáveis:
a) A primeira variável deverá conter o seu nome. 
b) A segunda variável deverá conter a sua idade.
c) Converter a segunda variável para string.
d) A terceira variável deverá conter a concatenação das duas variáveis anteriores.
e) Exibir no console a terceira variável.
f) Exibir no console o tamanho da terceira variável. */

var meuNome = "Inara ";
var minhaIdade = 21;
var meuNomeMinhaIdade = meuNome + minhaIdade + " - Meu nome e minha idade";

minhaIdade.toString();
console.log(meuNomeMinhaIdade);
console.log(meuNomeMinhaIdade.length);

/* 2) Criar 2 variáveis:
a) A primeira variável deverá conter o valor 17.
b) A segunda variável deverá conter o valor 28.
c) Converter os valores das duas variáveis
d) Exibir no console a terceira variável. */

var numero = 17;
var numero_ = 28;

numero.toString();
numero_.toString();

var converter = numero.toString() + " e " + numero_.toString();
console.log(converter);