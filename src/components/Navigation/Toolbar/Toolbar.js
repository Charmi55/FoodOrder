import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props)=>(
    <header className={styles.Toolbar}>
        <div>MENU</div>
        
        <div className ={styles.Logo}>
            <Logo/>
        </div>
        <nav>
            <ul>
                <NavigationItems/>
            </ul>
        </nav>
    </header>
)
export default Toolbar;