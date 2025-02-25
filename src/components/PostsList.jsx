import { useState, useEffect } from 'react';

import axios from 'axios';


export default function PostsList() {

    // State dei Post

    const [fruitPosts, setFruitPosts] = useState([])


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

                        </li>

                    ))

                }

            </ul>

        </>

    )

}