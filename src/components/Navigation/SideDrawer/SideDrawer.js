import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'
const SideDrawer=(props)=>{
    return(
        
        <Auxiliary>
            
        <div className={styles.SideDrawer}>
            <div className = {styles.Logo}>
                 <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Auxiliary>
    )
}
export default SideDrawer;