import './App.css';
import Axios from 'axios';
import { useState,useEffect } from 'react';
function App() {
  const[company,setCompany]=useState("");
  const[role,setRole]=useState("")
  const[offer,setOffer]=useState(0);

  const[companyList,setCompanyList]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then((response)=>{
      setCompanyList(response.data)
    })
  },[])

  const List=()=>{
    // console.log(company)
    Axios.post("http://localhost:3001/insert",{company:company, role:role,offer:offer})
  }
  const deleteCompany=(id)=>{
    // console.log(id)
    Axios.delete('http://localhost:3001/remove/'+id)
  }
  return (
    <div className="App">

      <h1 class="text-5xl border-4 border-lime-200 inline-block">CRUD APP MERN</h1>
      
      <div class="mt-4 basis-1 flex-col">
        
        <div>
          <label>COMPANY:</label>
          <input class="border-2 border-lime-400" type="text" 
           onChange={(event)=>{
            setCompany(event.target.value)
          }}/>
        </div>

        <div class="mt-4">
          <label>ROLES: </label>
          <input class="border-2 border-lime-400" type="text"
           onChange={(event)=>{
            setRole(event.target.value)
          }}/>
        </div>

        <div class="mt-4">
          <label>OFFERS:</label>
          <input class="border-2 border-lime-400" type="number"
           onChange={(event)=>{
            setOffer(event.target.value)
          }}/>
        </div>
        
        <div class="mt-4">
          <button class="border-4 border-orange-400" onClick={List}>SUBMIT</button>
        </div>
      </div>

      <h1>COMPANY LIST</h1>
      {
        companyList.map((items)=>{
          return <div>
            <div class="rounded-lg border-2 border-red-600 inline-block mt-4">
              <h1>COMPANY NAME: {items.name} </h1>
              <h1>ROLE: {items.role} </h1>
              <h1>NUMBER OF OFFERS: {items.offers}</h1>
              <button class="rounded-lg border-2 border-green-500" type="submit" 
              onClick={()=>deleteCompany(items._id)}>DELETE</button>
            </div>
          </div>
        })
      }
    </div>
  );
}

export default App;
