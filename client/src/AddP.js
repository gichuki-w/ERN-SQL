function AddP({setName, setEmail, setPost, handleSubmit}) {
    
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
            <label htmlFor="email" className='add-p-label'>Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className='add-p-input'
                type="text"
                id='email'/>
            <label htmlFor="post" className='add-p-label'>Post</label>
            <input
                onChange={(e) => setPost(e.target.value)}
                className='add-p-input'
                type="text"
                id='post' />
            <button
            // onSubmit={handleSubmit}
            >Submit</button>
        </form>
    )
}
export default AddP
