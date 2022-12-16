import './App.css';
import Navbar from './Components/Navbar';
import TodoForm from './Components/TodoForm';
import TodoSection from './Components/TodoSection';
import { HashRouter as Router, Route, Routes , useParams} from 'react-router-dom';
import Edit from './Components/Edit';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/todos' element={<TodoSection />} />
          <Route exact path='/add' element={<TodoForm />} />
          <Route exact path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
