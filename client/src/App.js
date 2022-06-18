import './App.css';
import {useState} from 'react'
import Axios from 'axios'

function App() {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const [Country, setCountry] = useState("");
  const [Wage, setWage] = useState(0);
  const [School, setSchool] = useState("");
  const [people, setPeople] = useState([]);
  const addPerson = () => {
    Axios.post('http://localhost:5500/create', {
      Name,
      Age,
      Country,
      Wage,
      School
    }).then(() => {
      setPeople([...people],{
      Name,
      Age,
      Country,
      Wage,
      School
      })
    })
  }
  const getPeople = () => {
    Axios.get('http://localhost:5500/people').then((response) => {
      setPeople(response.data)
    })
  }
  return (
    <div className="App">
      <div className='information'>
        <label>Name</label>
        <input type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age</label>
        <input type="number"
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Country</label>
        <input type="text"
          onChange={(e) => setCountry(e.target.value)}
        />
        <label>Wage</label>
        <input type="number"
          onChange={(e) => setWage(e.target.value)}
        />
        <label>Shool</label>
        <input type="text"
          onChange={(e) => setSchool(e.target.value)}
        />
        <button
          onClick={addPerson}
        >Add</button>
      </div>
      {/* {getPeople} */}
      {people.map((val, key) => {return <div>{val.name}, {val.Age}</div>})}
    </div>
  );
}
export default App;