import {useState} from 'react';
import { useHistory } from 'react-router-dom';


const Add = () => {
    const [title, setTitle] = useState('')
    const [img, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [writter, setWritter] = useState('')
    const history = useHistory();

    const postBook = (e) => {
        e.preventDefault();

        const data = {title,img,desc,writter}

        fetch('http://localhost:8000/books',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        })
        .then(() => history.push('/'))
        .catch((e) => console.log(e.message))

    } 

    return ( 
            <form onSubmit={postBook}>
                <label>Title</label>
                <input
                    required
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                >
                </input>
                <label>Image</label>
                <input
                    required
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                >
                </input>
                <label>Description</label>
                <textarea
                    required
                    onChange={(e) => setDesc(e.target.value)}
                >
                </textarea>
                <label>Writter</label>
                <input
                    required
                    type="text"
                    onChange={(e) => setWritter(e.target.value)}
                >
                </input>
                <button
                    type="submit"
                >Add Book</button>
            </form>
    );
}
 
export default Add;