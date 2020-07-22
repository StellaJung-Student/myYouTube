import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('videoFile', file);
    formData.append('title', title);
    formData.append('desc', desc);
    fetch('http://localhost:5000/videos/upload', {
      method: 'post',
      body: formData,
    });
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    const { name, value, files } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      case 'file':
        setFile(files[0]);
        break;
      default:
    }
  };
  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">Video File</label>
        <input
          type="file"
          name="file"
          id="file"
          files={[file]}
          accept="video/*"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
          required
        />
        <textarea
          name="desc"
          placeholder="Description"
          onChange={handleChange}
          required
        >
          {desc}
        </textarea>
        <button type="submit">Update Video</button>
      </form>
    </div>
  );
};

export default Upload;
