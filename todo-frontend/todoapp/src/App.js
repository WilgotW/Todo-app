import './App.css';
import Navbar from './Components/Navbar';
import TodoForm from './Components/TodoForm';
import TodoSection from './Components/TodoSection';
import { HashRouter as Router, Route, Routes , useParams} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<TodoSection />} />
          <Route exact path='/add' element={<TodoForm />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
