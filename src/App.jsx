import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './new'
import User from './user'
import Country from './Country'
import CountryDetails from './Country'

function App() {

  let [isLoggedIn,setIsLoggedIn]= useState(true)

  let [countries,setCountries]= useState([
    {name:'Nigeria',capital:'Abuja',currency:'Naira'},
    {name:'Ghana',capital:'Accra',currency:'Cedis'},
    {name:'Egypt',capital:'Cairo',currency:'unknown'}
  

])

function changeCountry(){
  setCountries([
    {name:'Russia',capital:'Moscow',currency:'unknown'},
    {name:'Israel',capital:'Jerusalem',currency:'unknown'},
    {name:'South Korea',capital:'Seoul',currency:'unknown'}
  ])
}
  return(
    <div>
      <h1>my first react course</h1>
      {/* <New name="components" price={[2000,3000]} series={{dayone:"components", daytwo:"states"}}/>
      <New name="state" price={[2000,3000]} series={{dayone:"components", daytwo:"states"}}/> */}
      {/* <User/> */}

      <button onClick={changeCountry}>load</button>

      {
        // isLoggedIn === true? (<h1>You are logged inside</h1>): (<h1>you are out</h1>)
      }

      {
        countries.map((country)=>{
          return (
            <CountryDetails name={country.name} capital={country.capital} currency={country.currency}/>
          )
        })
      }
    </div>
  
  )
}

export default App
