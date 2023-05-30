import { Route, Routes } from 'react-router-dom';
import './App.css';
import Movie from './components/Movie';
import QuestionsPage from './components/QuestionsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </>
  );
}

export default App;
