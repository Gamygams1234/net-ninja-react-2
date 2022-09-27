// we start by using state right here
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
 

  const [blogs, setBlogs] = useState(null);
const [name, setName] = useState("mario");

// this is to use the json server when we fetch data
// npx json-server --watch data/db.json --port 8080


  const handleNameChange = () =>{
    
    const newName = "John Cena"
    setName(newName)
  }

//   use Effect runs at the begining and when the state is changed
// using use effect for the blogs

  useEffect(()=>{
     fetch('http://localhost:8080/blogs')
     .then(res=>{
         return res.json()
     }).then(data=>{
         setBlogs(data)
         console.log(data)
     })
  },[])


  return (
    <div className="home">

        <h1>
            Welcome {name}
        </h1>
      {/* maps will retrun the element for each item in array */}
     { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete />}
      {/* run the filter in the curly brackets */}

      <button onClick={handleNameChange}>Change name</button>

    </div>
  );
};

export default Home;
