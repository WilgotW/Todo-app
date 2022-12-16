import './App.css';
import Navbar from './Components/Navbar';
import TodoForm from './Components/TodoForm';
import TodoSection from './Components/TodoSection';
import { HashRouter as Router, Route, Routes , useParams} from 'react-router-dom';
import Edit from './Components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<TodoSection />} />
          <Route exact path='/add' element={<TodoForm />} />
          <Route exact path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
