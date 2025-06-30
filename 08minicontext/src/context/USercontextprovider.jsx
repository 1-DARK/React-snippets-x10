import React, { useState } from "react";
import userContext from "./Usercontext.js";

const USercontextprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    return (
        <userContext.Provider value={{ user, setuser }}>
            {children}
        </userContext.Provider>
    )
}

export default USercontextprovider