const Home = () => {


    const handleClick = ()=>{
        alert("hello")
    };
    const handleClickAgain = (name)=>{
        alert("hello "  + name)
    };
    return (  

        <div className="home">
            <h2>HomePage</h2>
            {/* making the function so it invokes the click */}
            <button onClick={handleClick}>Click Me!</button>
            {/* this can invoke names inside the function */}
            <button onClick={()=>{handleClickAgain("John")}}>Click Me Again!</button>
        </div>
    );
}
 
export default Home;