import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalEditPage = ({ isOpen, onRequestClose, page, onUpdate }) => {
  const [title, setTitle] = useState(page.properties.Name.title[0].text.content);
  const [text, setText] = useState(page.properties.Text.rich_text[0].text.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(page.id, title, text);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Page"
      className="bg-background p-4 rounded shadow-lg w-1/2 mx-auto mt-20 text-white"
    >
      <h2 className="text-2xl font-bold mb-4">Edit Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 w-full border-b-2 border-accent bg-background text-white focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Text:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 w-full border-b-2 border-accent bg-background text-white focus:outline-none"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={onRequestClose} className="mr-4 py-2 px-4 rounded bg-gray-600 hover:bg-gray-700">
            Cancel
          </button>
          <button type="submit" className="py-2 px-4 rounded bg-accent hover:bg-green-700">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalEditPage;
