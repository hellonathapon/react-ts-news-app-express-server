import React, { FC } from 'react';
import Header from './Header';

type LayoutProp = {
    children: React.ReactNode
}

const Layout:FC<LayoutProp> = ({ children }) => {
    return (
        <>
           <Header/>
           { children }
        </>
    )
}

export default Layout;