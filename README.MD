# Notion Link

[Leia em português](README-ptbr.md)

## Description

Notion Link is a full-stack monorepo application that allows you to interact with the Notion API to create, read, and update pages in a Notion database. The application consists of a Flask backend and a React frontend, using Tailwind CSS for styling.

## Project Structure

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

## Backend Setup

1. **Install dependencies:**

   Navigate to the `backend` directory and create a virtual environment:

   ```sh
   cd backend
   python3 -m venv .venv
   source .venv/bin/activate  # On Windows, use .\.venv\Scripts\activate
   ```

2. **Install required packages:**

   ```sh
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add your environment variables:

   ```plaintext
   NOTION_TOKEN=your_notion_token
   DATABASE_ID=your_database_id
   ```

4. **Run the Flask server:**

   ```sh
   python app.py
   ```

## Frontend Setup

1. **Navigate to the `frontend` directory and install dependencies:**

   ```sh
   cd ../frontend
   npm install
   ```

2. **Run the development server:**

   ```sh
   npm start
   ```

## Important Files and Directories

### Backend

- **app.py**: Configures the Flask server and defines API endpoints.
- **config.py**: Loads environment variables.
- **notion_api/notion_client.py**: Contains the `NotionClient` class for interacting with the Notion API.

### Frontend

- **src/App.js**: Main React component.
- **src/components/ModalEditPage.js**: Component for the edit modal.
- **tailwind.config.js**: Tailwind CSS configuration.
- **postcss.config.js**: PostCSS configuration.

## Features

### Backend

The backend provides three main endpoints:

- **GET /api/pages**: Returns all pages from the Notion database.
- **POST /api/pages**: Creates a new page in the Notion database.
- **PATCH /api/pages/:page_id**: Updates an existing page in the Notion database.

### Frontend

The frontend allows you to view, create, and edit pages in the Notion database.

- **Page Grid**: Displays all pages from the database.
- **Edit Button**: Opens a modal to edit the selected page's information.
- **Edit Modal**: Allows you to update the title and text of the page.

## Technologies Used

- **Backend**: Flask, requests, flask-cors, python-dotenv.
- **Frontend**: React, Tailwind CSS, axios, react-modal.

## Contributing

Feel free to contribute to this project. Submit pull requests and issue reports to the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

