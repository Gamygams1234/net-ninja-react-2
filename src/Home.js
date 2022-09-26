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

  return (
    <div className="home">
      {/* maps will retrun the element for each item in array */}
      <BlogList blogs={blogs} title="All Blogs" />
      {/* run the filter in the curly brackets */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      />
    </div>
  );
};

export default Home;
