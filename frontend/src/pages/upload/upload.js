import React, { useState } from 'react';

const Upload = () => {
  const fileRef = useState(React.createRef());
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      title,
      desc,
      file: fileRef.current.files,
    });
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'desc':
        setDesc(value);
    }
  };
  return (
    <div className="form_container">
      <form action={`/videos/upload`} onSubmit={handleSubmit}>
        <label htmlFor="file">Video File</label>
        <input
          type="file"
          name="file"
          id="file"
          ref={fileRef}
          accept="video/*"
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
