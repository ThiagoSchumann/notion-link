# Notion Link

[Read in English](README.md)

## Descrição

Notion Link é uma aplicação full-stack monorepo que permite interagir com a API do Notion para criar, ler e atualizar páginas em um banco de dados do Notion. A aplicação consiste em um backend em Flask e um frontend em React, usando Tailwind CSS para estilização.

## Estrutura do Projeto

```plaintext
notion-link/
├── .gitignore
├── notion_client.log
├── README.md
├── README-ptbr.md
├── backend/
│   ├── .env
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   ├── __init__.py
│   └── notion_api/
│       ├── notion_client.py
│       ├── __init__.py
├── frontend/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── components/
│           └── ModalEditPage.js
```

## Configuração do Backend

1. **Instale as dependências:**

   Navegue até o diretório `backend` e crie um ambiente virtual:

   ```sh
   cd backend
   python3 -m venv .venv
   source .venv/bin/activate  # No Windows, use .\.venv\Scripts\activate
   ```

2. **Instale os pacotes necessários:**

   ```sh
   pip install -r requirements.txt
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` no diretório `backend` e adicione suas variáveis de ambiente:

   ```plaintext
   NOTION_TOKEN=seu_token_notion
   DATABASE_ID=seu_database_id
   ```

4. **Execute o servidor Flask:**

   ```sh
   python app.py
   ```

## Configuração do Frontend

1. **Navegue até o diretório `frontend` e instale as dependências:**

   ```sh
   cd ../frontend
   npm install
   ```

2. **Execute o servidor de desenvolvimento:**

   ```sh
   npm start
   ```

## Estrutura de Arquivos Importantes

### Backend

- **app.py**: Configura o servidor Flask e define os endpoints da API.
- **config.py**: Carrega as variáveis de ambiente.
- **notion_api/notion_client.py**: Contém a classe `NotionClient` para interagir com a API do Notion.

### Frontend

- **src/App.js**: Componente principal do React.
- **src/components/ModalEditPage.js**: Componente do modal para editar páginas.
- **tailwind.config.js**: Configuração do Tailwind CSS.
- **postcss.config.js**: Configuração do PostCSS.

## Funcionalidades

### Backend

O backend fornece três endpoints principais:

- **GET /api/pages**: Retorna todas as páginas do banco de dados do Notion.
- **POST /api/pages**: Cria uma nova página no banco de dados do Notion.
- **PATCH /api/pages/:page_id**: Atualiza uma página existente no banco de dados do Notion.

### Frontend

O frontend permite visualizar, criar e editar páginas no banco de dados do Notion.

- **Grid de Páginas**: Exibe todas as páginas do banco de dados.
- **Botão de Editar**: Abre um modal para editar as informações da página selecionada.
- **Modal de Edição**: Permite atualizar o título e o texto da página.

## Tecnologias Utilizadas

- **Backend**: Flask, requests, flask-cors, python-dotenv.
- **Frontend**: React, Tailwind CSS, axios, react-modal.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Envie pull requests e relatórios de problemas para o repositório no GitHub.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais