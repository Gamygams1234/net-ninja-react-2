// we start by using state right here
import {useState} from "react";

const Home = () => {

    // this is the use state feature
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(12)


    const handleClick = ()=>{
     setName("luigi")
     setAge(30)
    };


    return (  

        <div className="home">
            <h2>HomePage</h2>
            {/* making the function so it invokes the click */}
            <p>{name} is {age} years old</p>
            
            <button onClick={handleClick}>Click Me!</button>
            {/* this can invoke names inside the function */}

        </div>
    );
}
 
export default Home;