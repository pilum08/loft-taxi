import React from "react"
export const Context=React.createContext({})
export const AuthProvider=({children})=>{
    const[isLoggedIn, setIsloggedIn]=React.useState(false)
    const logIn=(email, password)=>{
        if(email !=='somemail@mail.com'||password !=='password') {
            return 
        }
       else setIsloggedIn(true)
    }
    const logOut=()=>{
        setIsloggedIn(false)
    }
    return (
        <Context.Provider value={{logIn, logOut, isLoggedIn}}>
            {children}
            </Context.Provider>
    )
}
export const withAuth=(InnerComponent)=>{
    return class extends React.Component {
        render(){
            return(
                <Context.Consumer>
                    {(value)=>{
                        return <InnerComponent {...value} {...this.props}/>
                    }}
                </Context.Consumer>
            )
        }
    }
}