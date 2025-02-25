import { useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom";

const initialFormData = {

    title: "",

    content: "",

    image: "",

    tags: []

}


export default function PostsForm() {

    // State del Form

    const [formData, setFormData] = useState(initialFormData)


    // Funzione del contenuto del Form

    function handleFormData(e) {

        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        setFormData((currentFormData) => ({

            ...currentFormData,

            [e.target.name]: value

        }))

    }


    const navigate = useNavigate();


    // Funzione del Submit

    function handleSubmit(e) {

        e.preventDefault();

        axios.post("http://localhost:3000/route", formData)

            .then(res => {

                console.log(res.data)

                navigate('/posts')

            })

            .catch(function (error) {

                console.log(error);

            })

        // setFormData((currentFruitsPosts) => [...currentFruitsPosts,

        // {

        //     id:

        //         currentFruitsPosts.length === 0 ? 1 : currentFruitsPosts[currentFruitsPosts.length - 1].id + 1,

        //     ...formData

        // }])

        setFormData(initialFormData)

    }


    return (
        <>

            <form className="posts-form" onSubmit={handleSubmit}>

                {/* Form */}

                <h3>Form section</h3>


                {/* Pulsante di refresh dei post */}

                {/* <button onClick={fetchPosts}>Carica Post</button> */}


                {/* Titolo */}

                <input

                    type="text"

                    name="title"

                    onChange={handleFormData}

                    value={formData.title}

                    placeholder='Nome del post'

                />

                {/* Immagine */}

                <input

                    type="text"

                    name="image"

                    onChange={handleFormData}

                    value={formData.image}

                    placeholder='Imagine pizza'

                />

                {/* Categoria */}

                <input

                    type="text"

                    name="tags"

                    onChange={handleFormData}

                    value={formData.tags}

                    placeholder='Categoria del post'

                />

                {/* Bottone del form  */}

                <button>Aggiungi</button>

            </form>

        </>

    )

}