// we start by using state right here
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // this is the use state feature

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);


  const handleDelete = (id) =>{
      const newBlogs = blogs.filter(blog=> blog.id !== id)
      setBlogs(newBlogs)

  }

  return (
    <div className="home">
      {/* maps will retrun the element for each item in array */}
      <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
      {/* run the filter in the curly brackets */}

    </div>
  );
};

export default Home;
