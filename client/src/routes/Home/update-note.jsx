import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes/${id}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);


        setIsLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const removeNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "DELETE"
      });

      if(response.ok) {
        navigate('/');
      }

    } catch (error) {
      
    }
  }

  return (
    <div>

      <div className="breadcrump-nav">
      <Link to="/" className="back-button ">
        {"<"} Geri Dön
      </Link>

      <button onClick={removeNote} className="delete fs-5 border rounded bg-danger">
       Notu Sil
       
      </button>

      </div>


      <form onSubmit={updateNote}>
        <div className="single-note ">
          <div className="">
            <label htmlFor="">Başlık:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="title fs-3 "
            />
          </div>

          <div>
            <label htmlFor="" className="">Açıklama:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows="4"
              cols="50"
              className="description"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          value={submitted ? "Not kaydediliyor" : "Notu Kaydet"}
          disabled={submitted}
        />

        <p className="text-center">
          {submitted && (
            <div className="success-message">Not kaydedildi</div>
          )}
        </p>
      </form>
    </div>
  );
}

export default UpdateNote;