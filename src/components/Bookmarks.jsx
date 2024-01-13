import { useEffect, useState } from "react";
import axios from 'axios';
const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    const getBookmarksByUser = async () => {
        try {
          // Make a POST request to the login endpoint
          let token = localStorage.getItem('jwtToken');
          console.log("token", token);
    
          const response = await axios.get('api/bookmarks', { headers : {
            Authorization: "Bearer " + token }});
    
          setBookmarks(response.data);
          console.log("current bookmarks:", response.data);
        } catch (err) {
          console.error(err);
        }
    };

    useEffect(() => {
        console.log("getting bookmarks");
        getBookmarksByUser();
    },[]);

    return (
        <div>
            <h1>Bookmarks</h1>
            {bookmarks?.map((bookmark) => <h3 key={bookmerk.id}>{bookmark.title}</h3>)}
        </div>
    );
}

export default Bookmarks;