import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailAlbum() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .then((res) => {
        const result = res.data;
        setAlbum(result);
      });
  }, []);
  return (
    <div>
      <ul>
        <li>userId: {album.userId}</li>
        <li>title: {album.title}</li>
        <li>id: {album.id}</li>
      </ul>
    </div>
  );
}

export default DetailAlbum;
