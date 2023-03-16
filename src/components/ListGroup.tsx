

import { useState } from "react";

function ListGroup() {

  let items=['casablanca','marrakech','rabat','ouarzazate'];
  const [selectedIndex,setselectedIndex]=useState(-1);
  

  return (
    <>
    <h1>List</h1>
{items.length===0 &&<p>no item found</p>}
  


    <ul className="list-group">
    {items.map((item,index) =>(

    <li
     className={selectedIndex === index
    ?"list-group-item active"
  :"list-group-item"
} 
    key ={item}
    onClick={()=>{setselectedIndex(index);}}
    
    >{item}</li>

))}


    </ul>
    </>
  );
}
export default ListGroup;
