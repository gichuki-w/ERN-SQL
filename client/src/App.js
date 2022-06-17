import './App.css';
import {useState} from 'react'
import Axios from 'axios'
// import Peoplelist from './Peoplelist'


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
      console.log('Success - Information Sent')
    })
  }

  // const dispInput = () => {
  //   console.log(Name + Age + Country + Wage + School)
  // }


  const getPeople = () => {
    Axios.get('http://localhost:5500/people').then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App">
      <div className='information'>
        <label>Name</label>
        <input type="text"
          // value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        <label>Age</label>
        <input type="number"
          // value={Age}
          onChange={(e) => {setAge(e.target.value)}}
        />
        <label>Country</label>
        <input type="text"
          // value={Country}
          onChange={(e) => {setCountry(e.target.value)}}
        />
        <label>Wage</label>
        <input type="number"
          // value={Wage}
          onChange={(e) => {setWage(e.target.value)}}
        />
        <label>Shool</label>
        <input type="text"
          // value={School}
          onChange={(e) => {setSchool(e.target.value)}}
        />
        <button
          onClick={addPerson}
        >Add</button>
      </div>
      <button
          onClick={getPeople}
        >Add</button>
      {/* <Peoplelist/> */}
    </div>
  );
}

export default App;
