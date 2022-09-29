import {  useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8080/blogs/${id}`);
  const navigate = useNavigate()
  const handleDelete = (id)=>{
    fetch(`http://localhost:8080/blogs/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json" }}).then(() => {
        console.log(`new blog deleted`);
   
  
      
      // with react it is navigate now no longer use history
      navigate("/")
      });

  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
                    <button onClick = {()=>{handleDelete(blog.id)}}>Delete</button>
				</article>
			)}
    </div>
  );
};

export default BlogDetails;
