# 📘 Tarefa: Building a JavaScript Command Parser

## 🎯 Objetivo

Os alunos irão criar um pequeno parser de comandos em JavaScript para transformar entradas de texto em dados estruturados. A atividade foca em manipulação de strings, uso de objetos e lógica condicional para interpretar comandos no estilo de uma CLI, usando o arquivo `starter-code.js` como ponto de partida.

## 📝 Tarefas

### 🛠️ Separando o comando principal

#### Descrição

Crie um script que receba uma string como `"/assign topic=javascript duration=30"` e identifique qual comando foi enviado.

#### Requisitos
O programa concluído deve:

- Receber uma string com o comando completo.
- Separar a entrada em partes usando espaços.
- Identificar o comando principal, como `/assign` ou `/review`.
- Exibir o comando principal no console.
- Ignorar espaços extras no início, no fim ou entre palavras.

### 🛠️ Convertendo argumentos em objeto

#### Descrição

Expanda o script para interpretar argumentos no formato `chave=valor` e armazená-los em um objeto JavaScript.

#### Requisitos
O programa concluído deve:

- Ler todos os argumentos após o comando principal.
- Dividir cada argumento em chave e valor.
- Montar um objeto como `{ topic: "javascript", duration: "30" }`.
- Exibir o objeto final no console.
- Manter os valores como string nessa etapa.

### 🛠️ Validando e resumindo o comando

#### Descrição

Adicione validações simples para aceitar apenas comandos conhecidos e gerar um resumo legível do que foi interpretado.

#### Requisitos
O programa concluído deve:

- Aceitar apenas os comandos `/assign` e `/review`.
- Verificar se cada argumento está no formato `chave=valor`.
- Informar um erro claro quando o comando for desconhecido.
- Informar um erro claro quando algum argumento estiver incompleto.
- Exibir um resumo final como `Command: /assign | topic: javascript | duration: 30`.
