# Verifica se um número informado é um número de CPF válido  v.1.0.0

**Esta biblioteca se destina à validar se um número informado é um número de CPF válido, para utilização em aplicações web.**
Nesta versão é possível validar um número informado é um número de CPF válido. 
Obs:  CPF deve ser informado como um string: "23456789100" 

## Como instalar:

```shell

$  npm install pafvalidador-cpf

```

## Como utilizar:

```node

Criar arquivo index.js com as seguintes informações:

> const useCpfValidator = require("pafvalidador-cpf");
> console.log(useCpfValidator("000.000.000-00"))
> // returns false


```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- README translated to english;

#### versão 1.0.0 (released)
- funcionalidades: retorna true se o número informado for um número de cpf válido;
- funcionalidades: retorna false se o número informado não for um número de cpf válido;
