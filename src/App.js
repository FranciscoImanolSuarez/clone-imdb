import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Message from "./components/Message";
import MyButton from "./components/Button";

function App() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <Message message="Ricardo, queria avisarte algo" />
      <Message message="Juan, queria invitarte a mi cumple" />

      <MyButton variant="primary" text="Ingresar" />
      <MyButton variant="danger" text="Salir" />
    </div>
  );
}

export default App;
