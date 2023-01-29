import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import database from './database';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyOrder from "./components/MyOrder";
import SignIn from "./components/SignIn";
import Salads from "./components/Salads";
import Drinks from "./components/Drinks";
import KidsCombos from "./components/KidsCombos";
import HotSubs from "./components/HotSubs";
import ColdSubs from "./components/ColdSubs";
import DailySub from "./components/DailySub";
import HookAndLadder from './components/HookAndLadder';
import NotFound from './components/NotFound';
import EditSub from "./components/EditSub";


function App() {
  const [myOrder, setMyOrder] = useState([])
  const [numOfSubs, setNumOfSubs] = useState(0)
  const [myOrderPrice, setMyOrderPrice] = useState(0)
 // turn this into one object instead of 3 state variables?

  function addToMyOrder(obj){
    const newArr = [...myOrder, obj];
    setMyOrder(newArr);
    setNumOfSubs(currentVal => currentVal + obj.amount);
    setMyOrderPrice(currentVal => currentVal + (obj.price * obj.amount));
    console.log(myOrder);
  }

  function handleDelete(card){
    const result = myOrder.filter(elem => elem.id !== card.id)
    setMyOrder(result);
    setNumOfSubs(currentVal => currentVal - card.amount);
  }

 
  
  return (
    <div className="App">
      <Navbar numOfSubs={numOfSubs} myOrderPrice={myOrderPrice}/>
      <Routes>
        <Route path='/home/subs/hookandladder' element={<HookAndLadder database={database} addToMyOrder={addToMyOrder} />} />
        <Route path='/home/subs/new' element={<Home database={database} addToMyOrder={addToMyOrder} />}  />
        <Route path='/home/subs/dailysub' element={<DailySub database={database} addToMyOrder={addToMyOrder}/>}/>
        <Route path='/home/subs/hotsubs' element={<HotSubs database={database} addToMyOrder={addToMyOrder} />}/>
        <Route path='/home/subs/coldsubs' element={<ColdSubs database={database} addToMyOrder={addToMyOrder}/>}/>
        <Route path='/home/salads' element={<Salads database={database} addToMyOrder={addToMyOrder}/>}  />
        <Route path='/home/drinks' element={<Drinks database={database} addToMyOrder={addToMyOrder}/>}  />
        <Route path='/home/kids' element={<KidsCombos database={database} addToMyOrder={addToMyOrder}/>}  />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/myorder' element={<MyOrder myOrder={myOrder} handleDelete={handleDelete} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;