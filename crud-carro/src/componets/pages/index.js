import React from "react";
import Item from "./componets/Item";
//npx json-servevr db.json --port 8000 --host 192.168.3.247
const API_URL = 'http://192.168.3.247:3000';

export default function cardapio() {
const [cardapio,setCardapio] = React.useState([]);
  
  React.useEffect(()=>{
fetch(API_URL+'/items')
.then(res=>res.json())
.then(dados => setCardapio(dados));
  },[]);
  return (
    <div>
      ola mundo
      <hr/>
      {/* {carda.map(cadaUm)=>{
        return(<Item key={cadaUm.id}nome={cadaUm.nome}/>)
      } }   */}
      {cardapio.map(i => <Item key ={i.id} nome={i.nome}/>)}
      
    </div>
);
}