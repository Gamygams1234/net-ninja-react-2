// we start by using state right here
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const {data:blogs, isPending, error} = useFetch('http://localhost:8080/blogs')

  // this is to use the json server when we fetch data
  // npx json-server --watch data/db.json --port 8080



  //   use Effect runs at the begining and when the state is changed
  // using use effect for the blogs


  return (
    <div className="home">
   


    {/* sets a loading message for a little bit */}
    {error && <div>{error}</div>}
      {isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete />}
      {/* run the filter in the curly brackets */}

    </div>
  );
};

export default Home;
