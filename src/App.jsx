import './App.css';
import TodoContainer from './Components/TodoContainer/TodoContainer';
import TodoList from './Components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoContainer/>
    </div>
  );
}

export default App;
