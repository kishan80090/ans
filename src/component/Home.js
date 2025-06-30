import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    return(
        <div className="home" >
            
            <div className="button-container" >

        <Link to="/ques">
        <button className="home-button"><strong>c++</strong></button>
        </Link>

        <Link to="/java">
        <button className="home-button"><strong>java</strong></button>
        </Link>
        <h1></h1>


</div>
        </div>
    )
}
export default Home;