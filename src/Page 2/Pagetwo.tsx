import React from "react";
import './Style.css'

export default function Pagetwo(){

    return(
<>
       <div className="Logo" >
       <img src="https://visualpharm.com/assets/406/Engine%20Oil%20Level-595b40b85ba036ed117dd0f5.svg" width="120px" />
       </div>   
       <div className="Container">
        
      <h1>DETALHES DA <br/>TROCA</h1>
       <form>
 <input type="text" name="Car" id="text" placeholder="Qual é o seu carro ?" />
 <input type="text" name="Oléo" id="text2" placeholder="Qual oléo você usa ?" />
 <input type="date" name="start" id="start1" />
 <input type="date" name="finish" id="finish1" />
 <button> salvar</button>
 </form>
       </div>
  
       </>
    )
}