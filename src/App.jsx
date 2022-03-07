import './App.css';
import logo from "./img/logo.png";
import couple from "./img/couple.png";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";

function App() {
    return (
        <div className="app">
            <div className="wrapper">
                <div className="logo">
                    <img width={275} src={logo} alt="logo"/>
                </div>
                <Routes>
                    <Route path="/" element={<p>Вибачте, але здається ваше посилання пошкоджено, зверніться до організаторів... :(</p>}/>
                    <Route path="/:id" element={<Home/>}/>
                    <Route path="/:id/info" element={<Info/>}/>
                    <Route path="/info" element={<Info/>}/>
                </Routes>
                <div className="footer">
                    <a href="tel: 0671127000">0671129524 - Наречена</a>
                    <img width={22} src={couple} alt=""/>
                    <a href="tel: 0968131000">Наречений - 0968131604</a>
                </div>
            </div>
        </div>
    );
}

export default App;
