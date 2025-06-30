import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Ques from './component/Ques';
import Java from './component/Java';


function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ques" element={<Ques/>}/>
    <Route path="/java" element={<Java/>}/>
  </Routes>
</Router>

    </div>
  );
}
export default App;
