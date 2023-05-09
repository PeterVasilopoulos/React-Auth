import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './views/ErrorPage';
import LocationPage from './views/LocationPage';
import KeywordPage from './views/KeywordPage';
import SurveyPage from './views/SurveyPage';

const HomePage = ()=>{
  return(
    <fieldset>
      <legend>HomePage component</legend>
    </fieldset>
  )
}

const AboutPage = ()=>{
  return(
    <fieldset>
      <legend>AboutPage component</legend>
    </fieldset>
  )
}

function App() {
  return (
    <div className="App">
      <h1> Routing Demo</h1>
      <p>
        Link tags: 
        <Link to="/"> Home </Link>| 
        <Link to="/about"> About </Link>| 
        <Link to="/error404"> ErrorPage </Link>| 
        <Link to="/location/tokyo"> To Tokyo</Link>| 
        <Link to="/location/Barcelona"> To Barcelona</Link> |
        <Link to="/search/pancakes/pink"> Pink pancakes</Link> |
        <Link to="/foodsurvey">Food survey</Link> |
      </p>
      <p>
        a tag: 
        <a href="/"> Home </a>| 
        <a href="/about"> About </a>| 
        <a href="/error404"> ErrorPage </a>| 
      </p>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/location/:city" element={<LocationPage />}/>
        <Route path="/search/:food/:color" element={<KeywordPage />} />
        <Route path="/foodsurvey" element={<SurveyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
