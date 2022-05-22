import React from "react"
import Pagetwo from "../Page 2/Pagetwo"
import './Style.css'
import {Link} from 'react-router-dom'


export default function Home(){
    return (

         <>
        <div className="ContainerHome">
        <img className="Vertical-img" src="https://visualpharm.com/assets/406/Engine%20Oil%20Level-595b40b85ba036ed117dd0f5.svg" width="120px" /></div>
        <div>
        <form className="ButtonGo">
            <button><Link to="/Page" > VAMOS LA </Link></button>
        </form>
        </div>
        
        </>
    )
}