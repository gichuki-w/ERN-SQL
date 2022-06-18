import './.css'
import { useState } from 'react'
import AddP from './AddP'

function JO() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [post, setPost] = useState()

    const handleVars = () => {
        console.log(`Name: ${name}, Email: ${email}, Post: ${post}`)
    }
    handleVars
    return (
        <div className='app2'>
            <AddP
                setName={setName}
                setEmail={setEmail}
                setPost={setPost}
            />
        </div>
    )
}


export default JO