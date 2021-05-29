import * as React from 'react';
import Header from './Header';

const Layout = ({children}) =>{
    return (
        <>
        
        <Header/>
        {children}
        <footer>
            este es el footer
        </footer>
        </>
    )
}

export default Layout;

