import React, {Component} from 'react'
import { Players } from '../Share/ListOfPlayers'
export default class player extends Component{
    render(){
        return(
            <div className='container'>
            {Players.map((player)=>(
                <div className='column'>
                    <div className='card'>
                        <img alt='' src={player.img}/>
                        <div className='description'>
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                        </div>
                        <p><button>Detail</button></p>
                    </div>
                </div>  
            ))}  
            </div>
        )
    }
}