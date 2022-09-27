// we start by using state right here
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // this is the use state feature

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);
const [name, setName] = useState("mario");

//   filter the blogs and return it. 
// we are running the function on the data itself

  const handleDelete = (id) =>{
      const newBlogs = blogs.filter(blog=> blog.id !== id)
      setBlogs(newBlogs)

  }
  const handleNameChange = () =>{
    
    const newName = "John Cena"
    setName(newName)
  }

//   use Effect runs at the begining and when the state is changed

// now use effect only runs when the name is changed  because of the dependencies
  useEffect(()=>{
      console.log("use effect ran")
      console.log(blogs)
  },[name])
  return (
    <div className="home">

        <h1>
            Welcome {name}
        </h1>
      {/* maps will retrun the element for each item in array */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
      {/* run the filter in the curly brackets */}

      <button onClick={handleNameChange}>Change name</button>

    </div>
  );
};

export default Home;
