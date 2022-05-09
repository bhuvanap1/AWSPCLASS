import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.svg';
import './assets/App.scss';
import Nav from './components/Nav';
import useMessages, { MessagesContext } from './models/messages.ts';

    const HomePage = () => <>
                                <h1>Home</h1>
                                <img src={logo} className="App-logo" alt="logo" />
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>

                           </>
    ;
    const AboutPage = () => <h1>About</h1>;
    const ContactPage = () => <h1>Contact</h1>;
    const LoginPage = () => <h1>Login</h1>;
    const WeatherPage = () => <h1>Weather</h1>;
    const WallPage = () => <h1>Wall</h1>;
    const NotFoundPage = () => <h1>404</h1>;


function App() {
    const messages = useMessages();
  return (
    <BrowserRouter>
    <MessagesContext.Provider value={messages}>
    <div className="App">
        <Nav />
      <div className="container">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/wall" element={<WallPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </div>
    </div>
    </MessagesContext.Provider>
    </BrowserRouter>
  );
}

export default App;