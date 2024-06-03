import Header from "../Header"


const Outlet=(props)=>{
    const {children} = props

    return(
    <>
        <Header/>
        {children}
    </>

)
}
export default Outlet