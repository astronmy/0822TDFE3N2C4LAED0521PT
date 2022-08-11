import './App.css';
import ContainerF from './components/ContainerF';

function App() {
  const heroes = [
    {id: 1, name: "Spiderman", origin: "Marvel"},
    {id: 2, name: "Superman", origin: "DC"},
    {id: 3, name: "Batman", origin: "DC"},
    {id: 4, name: "Hulk", origin: "Marvel"},
    {id: 5, name: "Lobo", origin: "DC"}
  ]


  return (
      <>
        <ContainerF heroes={heroes}/>
      </>
  );
}

export default App;
