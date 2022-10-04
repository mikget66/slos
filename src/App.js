import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import data from './data'

function App() {

  const cards = data.map(item=>
    <Card
      key={item.id}
      item={item}
    />
  )

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
