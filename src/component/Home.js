import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    return(
        <div className="home" >
            <h1 style={{color:"red"}} >||  _____Welcome_____  ||</h1>
            <div className="button-container" >

        <Link to="/ques">
        <button className="home-button"><strong>c++</strong></button>
        </Link>

        <Link to="/java">
        <button className="home-button"><strong>java</strong></button>
        </Link>

        
        <Link to="/phython">
        <button className="home-button"><strong>Phython</strong></button>
        </Link>

        <Link to="/html">
        <button className="home-button"><strong>HTML</strong></button>
        </Link>

        <Link to="/css">
        <button className="home-button"><strong>CSS</strong></button>
        </Link>

        <Link to="/sql">
        <button className="home-button"><strong>SQL</strong></button>
        </Link>

</div>
        </div>
    )
}
export default Home;