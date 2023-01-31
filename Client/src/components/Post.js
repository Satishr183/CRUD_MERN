import {useEffect, useState} from 'react'
import axios from 'axios'
import { Button ,Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
function Post() {

    const [updatedPost, setUpdatedPost] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/getAllPost")
        .then(res=>{
            setData(res.data.data)
        })
        .catch(err=>console.log(err.message))
    },[])

    const deletePost = (id) => {
        axios.delete(`http://localhost:5000/api/deletePost/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err.message))

        window.location.reload()
    }

    const updatePost=(pos)=>{
        setUpdatedPost(pos);
        handleShow()
    }
    const handleChange =(e)=>{
        const {name,value}=e.target

        setUpdatedPost((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })

    }

    const saveUpdatedPost=()=>{
        axios.put(`http://localhost:5000/api/updatePost/${updatedPost._id}`,updatedPost)
        .then(res=>console.log(res))
        .catch(err=>console.log(err.message))

        handleClose()
        window.location.reload()
    }
  return (
    <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
        <h1>Post Page</h1>
        <Button variant='outline-dark' onClick={()=>navigate(-1)}>Back</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Existing Post Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Control 
                    style={{marginBottom:"1rem"}}
                    placeholder='Title' 
                    name='title' 
                    value={updatedPost.title ? updatedPost.title : ""}
                    onChange={handleChange}
                    />
                    <Form.Control 
                    placeholder='Description' 
                    name='description' 
                    value={updatedPost.description ? updatedPost.description : "" }
                    onChange={handleChange}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        {data ? (
            <>
            {data.map((post)=>{
                return (
                    <div key={post._id} style={{width:"50%",margin:"1rem auto",border:"solid lightgray 2px", borderRadius:"8px"}}>
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around", margin:"1rem"}}>
                           <Button onClick={()=>updatePost(post)} variant='outline-info'>Update</Button>  
                           <Button  onClick={()=> deletePost(post._id)} variant='outline-danger'>Delete</Button>    
                        </div>
                    </div>
                )
            })}
            </>
        ): "" } 
    </div>
  )
}

export default Post