import Counter from "./components/Counter"
import ToDos from "./components/ToDos"
import './App.sass'
import Button from "./components/UI/Button";

function App() {
  return (
   <div>
     <ToDos />
     <Counter />
   </div>
  );
}

export default App;
