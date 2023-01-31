import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import  axios  from 'axios';


function CreatePost() {
    const navigate = useNavigate()
    const [post,setPost] =useState({
        title:"",
        description:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
       setPost((prev)=>{
        return {
            ...prev,
            [name]:value
       }
       })
    }
    const  handleClick = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:5000/api/createPost",post)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))

        navigate("post")

    }

  return (
    <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
        <h1>Create Post</h1>
        <Form>
            <Form.Group>
                <Form.Control name='title' placeholder='Title' style={{marginBottom:"1rem"}} value={post.title} onChange={handleChange}/>
                <Form.Control name='description' placeholder='Description' style={{marginBottom:"1rem"}} value={post.description} onChange={handleChange}/>
                <Button style={{width:"100%", marginBottom:"1rem"}} variant="outline-success" onClick={handleClick}>Save Post</Button>
            </Form.Group>
        </Form>
        <Button style={{width:"100%"}} variant="outline-dark" onClick={()=>navigate(-1)}>back</Button>
    </div>
  )
}

export default CreatePost