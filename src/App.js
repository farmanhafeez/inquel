import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/signup";
import Leaderboard from "./components/leaderboard";
import Footer from "./components/footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Register} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
