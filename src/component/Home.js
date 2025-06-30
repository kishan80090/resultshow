import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    return(
        <div className="home" >
            <h1 style={{color:"red"}} >||🤔  __Welcome__  🤔||</h1>
            <div className="button-container" >

        <Link to="/ques">
        <button className="home-button"><strong>c++(Quiz)</strong></button>
        </Link>

        <Link to="/java">
        <button className="home-button1"><strong>java(Quiz)</strong></button>
        </Link>

        
        <Link to="/phython">
        <button className="home-button2"><strong>Phython(Quiz)</strong></button>
        </Link>

        <Link to="/html">
        <button className="home-button3"><strong>HTML(Quiz)</strong></button>
        </Link>

        <Link to="/css">
        <button className="home-button4"><strong>CSS(Quiz)</strong></button>
        </Link>

        <Link to="/sql">
        <button className="home-button5"><strong>SQL(Quiz)</strong></button>
        </Link>

        <Link to="/maths">
        <button className="home-button6"><strong>Maths(Quiz)</strong></button>
        </Link>

        <Link to="/techo">
        <button className="home-button7"><strong>Technology(Quiz)</strong></button>
        </Link>

        <Link to="/flutter">
        <button className="home-button8"><strong>Flutter(Quiz)</strong></button>
        </Link>

</div>
        </div>
    )
}
export default Home;