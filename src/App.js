import './App.css';
import {useState, useEffect} from 'react';

function App() {
      const API = "https://kavi-node-app.herokuapp.com";

    const [mobiles, setMobiles] = useState([]);

  const getMobiles = () => {
      fetch(`${API}/mobiles`).then(data => data.json()).then(mobiles => setMobiles(mobiles));
  }

   useEffect(()=> getMobiles,[])

      
  return (
    <div className="phone-list-container">
    {mobiles.map((mobile) => <Phone key={mobile._id} mobile={mobile}/>)}
    </div> 
  );
}


export default App;

  function Phone({mobile}){
  return(
      <div className="phone-container">
      <img className='phone-picture' src={mobile.img} alt={mobile.model}/>
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
    )
    }