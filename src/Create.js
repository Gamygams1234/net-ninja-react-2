import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [name, setName] = useState("Yoshi")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(`Title: ${title}, body: ${body}, Author: ${name}`)

    }
  return (
    <div className="create">
      <h2>Add a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value = {title} onChange = {(e)=>setTitle(e.target.value)}/>
   
        <label>Blog Body</label>
        <textarea value = {body} onChange = {(e)=>setBody(e.target.value)}  required></textarea>
        <label>Author</label>
        <select name="" id="" value = {name} onChange = {(e)=>setName(e.target.value)}>
          <option value="Yoshi">Yoshi</option>
          <option value="Mario">Mario</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
