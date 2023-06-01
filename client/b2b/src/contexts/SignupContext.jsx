import { createContext, useState } from "react";

const emailContext = createContext();

// eslint-disable-next-line react/prop-types
const EmailProvider = ({children}) => {

    const [email, setEmail] = useState('');

    return (
        <emailContext.Provider value={{ email, setEmail }}>
            {children}
        </emailContext.Provider>
    )
}

export { EmailProvider, emailContext};