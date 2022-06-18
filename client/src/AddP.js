import './AddP.css';



function AddP({setName, setEmail, setPost}) {

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <form
            className='add-p-form'
            onSubmit={handleSubmit}>
            <label htmlFor="name" className='add-p-label'>Name</label>
            <input
                onChange={(e) => setName(e.target.value)}
                className='add-p-input'
                type="text"
                id='name'/>
            <label htmlFor="email" className='add-p-label'>Name</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className='add-p-input'
                type="text"
                id='email'/>
            <label htmlFor="post" className='add-p-label'>Name</label>
            <input
                onChange={(e) => setPost(e.target.value)}
                className='add-p-input'
                type="text"
                id='post'/>
        </form>
    )
}
export default AddP