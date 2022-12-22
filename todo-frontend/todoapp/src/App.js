import './App.css';
import Navbar from './Components/Navbar';
import TodoForm from './Pages/TodoForm';
import TodoSection from './Components/TodoSection';
import { HashRouter as Router, Route, Routes , useParams} from 'react-router-dom';
import Edit from './Pages/Edit';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Home from './Pages/Home';

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
