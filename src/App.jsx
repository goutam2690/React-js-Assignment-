import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/" element={<ShowList />} />
      </Routes>
    </Router>
  );
};

export default App;
