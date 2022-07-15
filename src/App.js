import './App.css';
import {useState, useEffect} from 'react';

function App() {
      const API = "https://kavi-node-app.herokuapp.com/";

//       const mobiles = [
//   {
//     model: "OnePlus 9 5G",
//     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     company: "Oneplus"
//   },
//   {
//     model: "Iphone 13 mini",
//     img:
//       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
//     company: "Apple"
//   },
//   {
//     model: "Samsung s21 ultra",
//     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
//     company: "Samsung"
//   },
//   {
//     model: "Xiomi mi 11",
//     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
//     company: "Xiomi"
//   }
// ];
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