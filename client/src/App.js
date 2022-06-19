import './addp.css'
import { useState, useEffect } from 'react'
import AddP from './AddP'
import List from './List.js'
import Axios from 'axios'
function App() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [post, setPost] = useState()
    const [all, setAll] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5500/create', {
            name,
            email,
            post
        }).then(() => {
            // console.log("DONE")
            // setAll()
        })
    }
    const getList = () => {
        Axios.get('http://localhost:5500/people').then((response) => {
          setAll(response.data)
        })
    }
    useEffect(() => {
        getList();
      }, []);
      console.log(all)
    return (
        <div className='app'>
            <AddP
                setName={setName}
                setEmail={setEmail}
                setPost={setPost}
                handleSubmit={handleSubmit}
            />
            <List
                key={all.id}
                all={all}
                setAll={setAll}
                getList={getList}
            />
        </div>
    )
}
export default App





