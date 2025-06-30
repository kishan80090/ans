import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    return(
        <div className="home" >
            <h1>||     Welcome     ||</h1>
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

</div>
        </div>
    )
}
export default Home;