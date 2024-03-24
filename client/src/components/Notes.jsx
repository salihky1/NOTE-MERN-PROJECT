import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetNotes() {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (response.ok) {
          const data = await response.json();
          setResponseData(data);
        } else {
          console.log("Failed to fetch notes.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [baseUrl]); // baseUrl değiştiğinde useEffect tekrar çalışacak

  return (
    <div className="mt-4">
     
      <ul>
        {/* responseData içindeki her not için bir liste elemanı oluştur */}
        {responseData.map((notes,kutu) => (
          <div className="border border-1 bg-light rounded-1 mb-4" key={kutu}>
          <li className=" p-3 " >
           
            {/* Her not için bir link oluştur */}
            <Link to={`/note/${notes._id}`}>
              {/* Notun başlığını ve açıklamasını göster */}
              <div className="fs-2 text-success">{notes.title}</div>
              <div className="text-black">{notes.description}</div>
            </Link>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default GetNotes;
