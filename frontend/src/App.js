import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalEditPage from './components/ModalEditPage';
import './App.css';

function App() {
  const [pages, setPages] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedPage, setSelectedPage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await axios.get('/api/pages');
      setPages(response.data);
    } catch (error) {
      console.error('Error fetching pages:', error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/pages', { title, text });
      if (response.status === 201) {
        fetchPages();
        setTitle('');
        setText('');
      }
    } catch (error) {
      console.error('Error creating page:', error);
    }
  };

  const handleUpdate = async (pageId, newTitle, newText) => {
    try {
      const response = await axios.patch(`/api/pages/${pageId}`, { title: newTitle, text: newText });
      if (response.status === 200) {
        fetchPages();
      }
    } catch (error) {
      console.error('Error updating page:', error);
    }
  };

  const openModal = (page) => {
    setSelectedPage(page);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App min-h-screen bg-background text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-accent">Notion Database</h1>
      <form onSubmit={handleCreate} className="mb-8 w-full max-w-md flex flex-col items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="mb-4 p-2 w-full border-b-2 border-accent bg-background text-white focus:outline-none"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text"
          required
          className="mb-4 p-2 w-full border-b-2 border-accent bg-background text-white focus:outline-none"
        />
        <button type="submit" className="bg-accent text-white py-2 px-4 rounded">
          Create Page
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4 text-accent">Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {pages.map((page) => (
          <div key={page.id} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">{page.properties?.Name?.title?.[0]?.text?.content}</h3>
            <p className="mb-4">{page.properties?.Text?.rich_text?.[0]?.text?.content}</p>
            <button
              onClick={() => openModal(page)}
              className="bg-accent text-white py-2 px-4 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {selectedPage && (
        <ModalEditPage
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          page={selectedPage}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;
