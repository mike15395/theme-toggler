import React, { useState } from "react";

export const ThemeContext = React.createContext(); //creating context and exporting

export const Context = () => React.useContext(ThemeContext); //using context and exporting

export default function ThemeProvider({ children }) {
    const [toggle, setToggle] = useState(false);
    
    const toggleFunction = () => {
        setToggle(!toggle);
    }

    return (
        <ThemeContext.Provider value={{ toggle, toggleFunction }}>
            {children}
        </ThemeContext.Provider>
    );
}


// Here we are using a single component as provider and further importing it
// in another components where we require context.
//here children is keyword it cannot be other name.
// passing data as props in provider here the prop is value="Mikhil Desai"
// we can also pass function/variable as props as well.
// So this component has complete Context API in one component.