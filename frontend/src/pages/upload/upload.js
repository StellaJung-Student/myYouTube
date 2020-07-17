import React from 'react';

const Upload = () => (
  <div className="form_container">
    <form action={`/videos/upload`} method="post">
      <label htmlFor="file">Video File</label>
      <input type="file" name="file" id="file" />
      <input type="text" name="title" placeholder="Title" />
      <textarea name="desc" placeholder="Description"></textarea>
      <button type="submit">Update Video</button>
    </form>
  </div>
);

export default Upload;
