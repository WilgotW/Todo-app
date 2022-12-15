import './App.css';
import Navbar from './Components/Navbar';
import TodoForm from './Components/TodoForm';
import TodoSection from './Components/TodoSection';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <TodoForm />
      <TodoSection />
    </div>
  );
}

export default App;
