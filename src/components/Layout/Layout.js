import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


const Layout = (props) => {
    return(
    <Auxiliary>
       <Toolbar/>
       <SideDrawer/>
        <main >
            {props.children}
        </main>
    </Auxiliary>
    )
    }

export default Layout;