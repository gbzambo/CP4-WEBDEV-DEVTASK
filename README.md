# DevTask — Sistema de Lista de Tarefas do Programador

**Turma:** ESPF
**Disciplina:** Web Development
**Professor:** Wellington Cidade Silva
**Instituição:** FIAP

### Integrantes

| Nome                         | RM     |
| ---------------------------- | ------ |
| Gabriel Torres Zambo         | 569883 |
| Octavio Mello Covre de Souza | 571811 |
| Enzo Leme Gomes              | 572148 |

**Repositório:** https://github.com/gbzambo/CP4-WEBDEV-DEVTASK

---

## 🎯 Objetivo

Desenvolver uma aplicação de lista de tarefas utilizando React, aplicando conceitos de componentização, Hooks, Props, callbacks, manipulação de arrays, persistência de dados e versionamento com Git e GitHub.

O sistema foi desenvolvido como parte do Checkpoint 4 da disciplina de Web Development da FIAP.

## 🚀 Funcionalidades

* Cadastro de tarefas
* Nome da tarefa
* Data de entrega
* Descrição
* Prioridade: Baixa, Média ou Alta
* Conclusão de tarefas
* Remoção de tarefas
* Filtro por:

  * Todas
  * Pendentes
  * Concluídas
* Persistência automática das tarefas no `localStorage`
* Recuperação das tarefas após atualizar a página

## 🛠️ Tecnologias utilizadas

* React
* Vite
* JavaScript
* Tailwind CSS
* HTML
* Git
* GitHub
* LocalStorage

## 📁 Estrutura do projeto

```text
CP4-WEBDEV-DEVTASK/
├── src/
│   ├── components/
│   │   ├── FilterButtons.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Arquitetura dos componentes

```text
App
├── TaskForm
├── FilterButtons
└── TaskList
    └── TaskCard
```

### App

Responsável pelo estado principal da aplicação e pela comunicação entre os componentes.

Controla:

* Lista de tarefas
* Filtro selecionado
* Adição de tarefas
* Conclusão de tarefas
* Remoção de tarefas
* Persistência no `localStorage`

### TaskForm

Responsável pelo formulário de cadastro de novas tarefas.

### TaskList

Responsável por filtrar e listar as tarefas cadastradas.

### TaskCard

Responsável pela apresentação individual de cada tarefa e pelas ações de concluir e remover.

### FilterButtons

Responsável pela seleção do filtro de tarefas.

### 💾 Persistência

As tarefas são armazenadas no localStorage do navegador.

Quando a aplicação é iniciada, as tarefas previamente salvas são recuperadas. Sempre que o estado das tarefas é alterado, os novos dados são armazenados novamente.

Os objetos das tarefas são convertidos para JSON para serem armazenados como texto e posteriormente convertidos novamente para objetos JavaScript.

📚 Conceitos de React utilizados
useState

Utilizado para controlar os estados da aplicação, como a lista de tarefas, o filtro selecionado e o carregamento dos dados.

useEffect

Utilizado para realizar os efeitos relacionados ao localStorage, carregando os dados ao iniciar a aplicação e salvando-os quando as tarefas são alteradas.

Props e callbacks

Os componentes recebem informações e funções através de props. Callbacks são utilizados para comunicar ações realizadas em componentes filhos ao componente App.

map()

Utilizado para percorrer as tarefas e gerar os componentes TaskCard, além de atualizar uma tarefa específica quando ela é concluída.

filter()

Utilizado para remover tarefas e também para criar a lista de tarefas correspondente ao filtro selecionado.

▶️ Como executar o projeto

Clone o repositório:

git clone https://github.com/gbzambo/CP4-WEBDEV-DEVTASK.git

Entre na pasta:

cd CP4-WEBDEV-DEVTASK

Instale as dependências:

npm install

Execute o projeto:

npm run dev

Depois, acesse o endereço disponibilizado pelo Vite no terminal.

🌐 Aplicação online

A aplicação também está disponível online através do Vercel:

Acesse: https://cp-4-webdev-devtask.vercel.app/

📌 Versionamento

O projeto foi desenvolvido utilizando commits semânticos para registrar a evolução das funcionalidades, incluindo cadastro, listagem, conclusão, remoção, filtros, persistência de dados e documentação.
