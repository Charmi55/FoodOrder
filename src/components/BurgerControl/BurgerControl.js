import { checkPropTypes } from 'prop-types';
import React from 'react'
import styles from './BurgerControl.module.css';

const BurgerControl = (props) =>{
    return(
        <div className = {styles.BurgerControl}>
        <div className={styles.Label}>{props.label}</div>
        <button className={styles.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={styles.More} onClick={props.added}>More</button>
      </div>
      
    )
}
export default BurgerControl;