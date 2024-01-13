import { useState } from "react";
import axios from 'axios';

const CreateBookmarkForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [error, setError] = useState("");

    const handleCreatBookmark = async () => {
        try {
          let token = localStorage.getItem('jwtToken');
          const data = { link, title, description };
    
          const response = await axios.post('api/bookmarks', data, { headers: { Authorization: "Bearer " + token }});
          window.location.href = "/dashboard";
        } catch (err) {
          setError('error');
        }
      };

      return (
        <div>
          <h2>Create Bookmark</h2>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
         
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button onClick={handleCreatBookmark}>Create Bookmark</button>
        </div>
      );
}

export default CreateBookmarkForm;