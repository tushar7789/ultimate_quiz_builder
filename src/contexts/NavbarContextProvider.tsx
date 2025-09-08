import React, { createContext, useContext, useState, useEffect } from 'react'
import { NavbarContextValues } from '@/interfaces/interfaces';

const initialState: NavbarContextValues = { currPage: '', setCurrPage: () => { } };

const NavbarContext = createContext(initialState);

const NavbarContextProvider = ({ children }: any) => {
    const [currPage, setCurrPage] = useState('Home');

    return (
        <NavbarContext.Provider value={{
            currPage: currPage,
            setCurrPage: setCurrPage
        }}>
            {children}
        </NavbarContext.Provider>
    )
}


const useNavbarContext = () => {
    const cont = useContext(NavbarContext);
    if (cont === undefined) return;

    return cont;
}

const SetPage = (key: any) => {
    const { currPage, setCurrPage }: any = useNavbarContext();

    useEffect(() => {
        setCurrPage(key);
    },
        []);
}


export { NavbarContextProvider, useNavbarContext, SetPage };
