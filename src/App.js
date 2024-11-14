import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img src={logo} alt="React Logo" width="40px"></img>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Wast first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of entreprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
