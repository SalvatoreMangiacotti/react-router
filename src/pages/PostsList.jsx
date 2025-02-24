import { useState, useEffect } from 'react';

import axios from 'axios';


const initialFormData = {

    title: "",

    content: "",

    image: "",

    tags: []

}


export default function PostsList() {

    // State dei Post

    const [fruitPosts, setFruitPosts] = useState([])


    // State del Form

    const [formData, setFormData] = useState(initialFormData)


    // Funzione API

    function fetchPosts() {

        axios.get("http://localhost:3000/route")

            .then((res) =>

                setFruitPosts(res.data)

            )

            .catch(function (error) {

                console.log(error);

            })

    }


    // Caricamento ad inizio pagina

    useEffect(fetchPosts, [])


    // Funzione del contenuto del Form

    function handleFormData(e) {

        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        setFormData((currentFormData) => ({

            ...currentFormData,

            [e.target.name]: value

        }))

    }


    // Funzione del Submit

    function handleSubmit(e) {

        e.preventDefault();

        axios.post("http://localhost:3000/route", formData)

            .then(res => {

                console.log(res.data)

            })

            .catch(function (error) {

                console.log(error);

            })

        setFruitPosts((currentFruitsPosts) => [...currentFruitsPosts,

        {

            id:

                currentFruitsPosts.length === 0 ? 1 : currentFruitsPosts[currentFruitsPosts.length - 1].id + 1,

            ...formData

        }])

        setFormData(initialFormData)

    }


    // Funzione del bottone di rimozione post

    function removePost(id) {

        const updatedPosts = fruitPosts.filter((post) => {

            return post.id !== id;

        });

        axios.delete(`http://localhost:3000/route/${id}`)

            .then(res =>

                console.log(res),

                setFruitPosts(updatedPosts)

            )

            .catch(err => console.log(err))

    }


    return (

        <>

            <h1>React blog</h1>

            {/* Lista post */}

            <ul className="fruit-posts">

                {
                    fruitPosts.map((fruit) => (

                        <li key={fruit.id}>

                            {/* API Properties */}

                            <div className='card-content'>

                                <div className='title-wrapper'>

                                    <h2>{fruit.title}</h2>

                                    <img src={fruit.image} />

                                </div>

                                <p>{fruit.content}</p>

                                <span>
                                    {fruit.tags ? fruit.tags.join(", ") : "No tags available 🔥"}
                                </span>

                            </div>

                            {/* Bottone di rimozione del post */}

                            <button className="remove-button" onClick={() => removePost(fruit.id)}>

                                Elimina Post

                            </button>

                            {/* 
                            
                            <h2>{fruit.titolo}</h2>

                            <h3>{fruit.autore}</h3>

                            <p>{fruit.contenuto}</p>

                            <span>{fruit.categoria}</span> 
                            
                            */}

                        </li>

                    ))

                }

            </ul>


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


                {/* Contenuto */}

                <textarea

                    type="text"

                    name="content"

                    onChange={handleFormData}

                    value={formData.content}

                    placeholder='Contenuto del post'

                >

                    {/* DEBUG per ricordarmi che text area ha bisogno
                    di un tag di chiusura, con Maracas incluse 🪇 */}

                </textarea>

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