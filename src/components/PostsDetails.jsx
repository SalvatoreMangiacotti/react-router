import axios from "axios";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom"


export default function PostsDetails() {

    const { id } = useParams();

    const [post, setPost] = useState({})

    function fetchPost() {

        axios.get(`http://localhost:3000/route/${id}`)

            .then(response => setPost(response.data))

            .catch(error => console.log(error))

    }


    useEffect(

        () => fetchPost(), [id]

    )


    return (

        <>

            <h2>Pizza detail page {post.title}</h2>

            <img src={post.image} alt={post.title} />

        </>

    )

}