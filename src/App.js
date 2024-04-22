import './App.css';
import ToDo from './components/ToDo';
import ClassCount from './ClassCount';
import FunctionCount from './FunctionCount';


function App() {
  return (
    <div className="container">
      <h1 className="text-center">To do list</h1>
      <ToDo />
      <ClassCount/>
      <FunctionCount/>

    </div>
  );
}

export default App;
