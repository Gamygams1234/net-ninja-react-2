import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("Yoshi");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    const blog = { title, body, author: name };
    fetch(`http://localhost:8080/blogs/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(blog) }).then(() => {
      console.log(`new blog added`);
      setIsPending(false)
    });
  };
  return (
    <div className="create">
      <h2>Add a new Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        <label>Author</label>
        <select name="" id="" value={name} onChange={(e) => setName(e.target.value)}>
          <option value="Yoshi">Yoshi</option>
          <option value="Mario">Mario</option>
        </select>

{!isPending?
        <button>Add Blog</button>:
        <button disabled>Loading..</button>
    }
      </form>
    </div>
  );
};

export default Create;
