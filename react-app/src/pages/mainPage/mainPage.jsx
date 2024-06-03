
import './main.css'
import { useEffect, useState } from 'react'
import Card from '../../componets/Card'


const MainPage=()=>{

    const [result,setResult]=useState(null)
    
    const handleGetPokemons=async(url='https://pokeapi.co/api/v2/pokemon/' ) => {
        const response=await fetch(url);
        const data=await response.json()
        setResult(data)
    }


    useEffect(()=>{
        handleGetPokemons()
},[])

    return (

    <>
        <div className='wrapper'>
            {result?.results?.map((item,index)=>(
                <div key={index}>
                    <Card name={item.name}>{item.name}</Card>
                </div>
            ))}
            <div className='ButtonMain'>
                <button onClick={()=>handleGetPokemons(result.previous)}>Previous</button>
                <button onClick={()=>handleGetPokemons(result.next)}>Next</button>
            </div>
        </div>
    </>


    )


}

export default MainPage;


