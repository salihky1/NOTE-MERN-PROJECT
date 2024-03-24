import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function AddNote() {

    const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
    const [title, setTitle] = useState("")
    const [description, setDescrp] = useState("")
    const [submitted, setSubmitted] = useState(false);

    const addNote = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title, description

                }),
            })


            if (response.ok) {
                setTitle("")
                setSubmitted(true)
                setTimeout(() => (false), 2000);
            } else {
                console.log("Failed to submit data.")
            }




        } catch (error) {
            console.log(error)
        }

    }
    return (




        <div>
            <Link to="/" className='back-button mb-3'>Geri Dön</Link>

            <form onSubmit={addNote}>
                <div className="single-note">
                    <div>
                        <input type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Başlık'
                            className='title' />
                    </div>
                </div>
                <div>
                    <textarea value={description}
                        onChange={(e) => setDescrp(e.target.value)}
                        placeholder='Açıklama'
                        rows="4"
                        cols="50"
                        className='description mt-4 border rounded bg-light'></textarea>
                </div>

                <input type="submit"
                    value={ "KAYDET"}
                    />
                <p className='text-center'>
                    {submitted && <div className='success-message'>Notunuz deftere kaydedildi!</div>}
                </p>
            </form>


        </div>
    )
}

export default AddNote