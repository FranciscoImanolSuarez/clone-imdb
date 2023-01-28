import Message from "./components/Message";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <Message message="Ricardo, queria avisarte algo" />
      <Message message="Juan, queria invitarte a mi cumple" />
    </div>
  );
}

export default App;
