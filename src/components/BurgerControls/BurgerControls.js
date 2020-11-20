import React from 'react';
import BurgerControl from '../BurgerControl/BurgerControl'
import styles from './BurgerControls.module.css'

const Controls = [
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'},
    {label:'Meat', type:'meat'},
]
const BurgerControls = (props)=>{
    return (
        <div className= {styles.BurgerControls}>
            <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {Controls.map(ctrl=>(
            <BurgerControl
             key={ctrl.label} 
             label={ctrl.label}
             added={()=>props.ingredientAdded(ctrl.type)}
             removed= {()=>props.ingredientRemoved(ctrl.type)}
             disabled={props.disabled[ctrl.type]}/>
            ))}
            <button disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
    )
}

export default BurgerControls;