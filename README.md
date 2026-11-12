# Programação Orientada a Objetos — RI4

Repositório destinado ao desenvolvimento da atividade **RI4**, realizada na disciplina de **Programação Orientada a Objetos**, do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Faculdade de Tecnologia de São José dos Campos (FATEC-SJC)**.

## Sobre o Projeto

O projeto consiste em uma aplicação desenvolvida em **JavaScript** para representar o relacionamento entre empresas, clientes, endereços e telefones, utilizando conceitos de programação orientada a objetos e modularização de código.

A atividade dá continuidade aos conceitos desenvolvidos no RI3, acrescentando a organização das classes em módulos independentes por meio das instruções `export` e `import`.

O sistema permite cadastrar informações de uma empresa, associar clientes e telefones e apresentar os dados organizados no console.

## Funcionalidades

- Criação e instanciação de objetos de empresas, clientes, endereços e telefones.
- Separação das classes em um módulo reutilizável.
- Exportação e importação de classes entre arquivos JavaScript.
- Armazenamento de informações cadastrais.
- Associação de múltiplos telefones a clientes e empresas.
- Associação de clientes a uma empresa.
- Encapsulamento de informações por meio de atributos privados.
- Implementação de métodos getters.
- Conversão de informações textuais para letras maiúsculas e minúsculas.
- Utilização de coleções `Set` para organizar objetos.
- Exibição formatada das informações no console.

## Estrutura das Classes

A aplicação utiliza quatro classes principais, definidas no arquivo `RI4Modulo.js`.

### Telefone

Responsável por representar as informações de contato telefônico.

**Atributos:**
- `ddd`: código de área.
- `numero`: número do telefone.

### Endereco

Responsável por armazenar as informações de localização de clientes e empresas.

**Atributos:**
- `estado`: estado de residência ou localização.
- `cidade`: cidade.
- `rua`: nome da rua.
- `numero`: número do imóvel.

**Métodos:**
- Getters para conversão de estado, cidade e rua em letras maiúsculas e minúsculas.
- `detalhe()`: retorna as informações completas do endereço.

### Cliente

Responsável por representar os clientes associados à empresa.

**Atributos:**
- `nome`: nome do cliente.
- `#cpf`: atributo privado que armazena o CPF.
- `endereco`: objeto da classe `Endereco`.
- `telefones`: coleção `Set` de objetos da classe `Telefone`.

**Métodos:**
- `NomeMa` e `NomeMin`: retornam o nome em letras maiúsculas e minúsculas.
- `Cpf`: permite consultar o CPF.
- `Telefones`: retorna uma lista dos números cadastrados.
- `addTelefone()`: adiciona um telefone ao cliente.
- `listarTelefones()`: apresenta os telefones associados.
- `detalhe()`: retorna as informações do cliente, endereço e telefones.

### Empresa

Responsável por representar uma empresa e gerenciar suas associações com clientes e telefones.

**Atributos:**
- `razaoSocial`: razão social da empresa.
- `nomeFantasia`: nome fantasia.
- `#cnpj`: atributo privado que armazena o CNPJ.
- `endereco`: objeto da classe `Endereco`.
- `clientes`: coleção `Set` de objetos da classe `Cliente`.
- `telefones`: coleção `Set` de objetos da classe `Telefone`.

**Métodos:**
- Getters para consulta e conversão de atributos.
- `addCliente()`: adiciona um cliente à empresa.
- `addTelefone()`: adiciona um telefone à empresa.
- `listarClientes()`: retorna as informações dos clientes cadastrados.
- `detalhe()`: apresenta os dados da empresa e dos clientes.

## Modularização do Código

O principal diferencial desta atividade é a separação entre a definição das classes e a execução do programa.

### RI4Modulo.js

Contém as classes `Telefone`, `Endereco`, `Cliente` e `Empresa`, disponibilizadas por meio da palavra-chave `export`.

Essa organização permite reutilizar as classes em outros arquivos sem duplicar suas implementações.

### RI4Teste.js

Responsável pela importação das classes, criação dos objetos e execução dos testes da aplicação.

As classes são importadas utilizando a instrução:

```javascript
import { Empresa, Cliente, Endereco, Telefone } from './RI4Modulo.js'
```

Após a importação, o programa instancia os objetos, estabelece os relacionamentos e apresenta os resultados no console.

## Funcionamento

Inicialmente, o arquivo `RI4Teste.js` importa as classes definidas em `RI4Modulo.js`.

Em seguida, são criados objetos de telefone e endereço, que serão utilizados para representar as informações cadastrais dos clientes e da empresa.

O programa instancia quatro clientes, cada um associado a um endereço e a dois números de telefone.

Posteriormente, uma empresa é criada com razão social, nome fantasia, CNPJ, endereço e telefones próprios.

Os clientes são associados à empresa por meio do método `addCliente()`, enquanto os números de telefone são adicionados utilizando `addTelefone()`.

Por fim, o método `detalhe()` da classe `Empresa` é executado, apresentando no console as informações da empresa e de seus clientes, incluindo seus respectivos endereços e telefones.

## Conceitos Aplicados

- Programação orientada a objetos.
- Classes e construtores.
- Criação e instanciação de objetos.
- Propriedades e métodos.
- Encapsulamento de atributos.
- Atributos privados utilizando `#`.
- Métodos getters.
- Composição e associação entre objetos.
- Coleções `Set`.
- Estruturas de repetição `for...of`.
- Manipulação de strings.
- Modularização de código.
- Exportação e importação de classes.
- Reutilização e organização de código.

## Tecnologias Utilizadas

- **JavaScript:** linguagem utilizada para implementar as classes e a lógica da aplicação.
- **Node.js:** ambiente de execução para executar o programa pelo terminal.
- **ES Modules:** sistema de módulos utilizado para exportação e importação de classes.


## Como Executar

**1.** Clone o repositório:

```bash
git clone https://github.com/WendyMininel/RI4.git
```

**2.** Acesse a pasta do projeto:

```bash
cd RI4
```

**3.** Para utilizar os módulos ES no Node.js, crie um arquivo `package.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "type": "module"
}
```

**4.** Execute o arquivo de teste:

```bash
node RI4Teste.js
```

O terminal apresentará as informações cadastrais da empresa e de seus clientes, incluindo os endereços e números de telefone associados.

## Objetivo Acadêmico

Aplicar e aprofundar os conceitos de programação orientada a objetos por meio da implementação de classes, construtores, métodos, atributos privados e relacionamentos entre objetos.

A atividade também busca compreender a importância da modularização, separando a definição das classes da execução do programa e promovendo maior organização, manutenção e reutilização do código.

## Autora

**Wendy Santos Mininel**

Análise e Desenvolvimento de Sistemas — FATEC São José dos Campos

[GitHub — WendyMininel](https://github.com/WendyMininel)

---

Projeto desenvolvido para fins acadêmicos na disciplina de Programação Orientada a Objetos.
