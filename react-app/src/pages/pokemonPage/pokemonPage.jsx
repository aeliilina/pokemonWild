import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import './pokemonPage.css'

const PokemonPage=(props)=>{

// const {pokemonUrl}=props;

const [pokemonData,setPokemonData]=useState(null)
const  location=useLocation()
const pokemonUrl = location.pathname.split("/").pop()
console.log(pokemonUrl)
const handleGetPokemons= async()=>{
    const response=await fetch ('https://pokeapi.co/api/v2/pokemon/'+ pokemonUrl)
    const result=await response.json();
    setPokemonData(result)
}
useEffect(()=>{
    handleGetPokemons();
},[])



    return (
        <>
        <div className="PokemonBack">
            <div className="PokemonWrapper">
                <div className="pokemonCardWrapper">
                    <div className="pokemonImgWrapper">
                    <img  className="pokemonImg"   src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
                    </div>
                        <div className="pokemonContent">
                            <p className="pokemonName">{pokemonData?.name}</p>
                            <p className="pokemonOrder">Number of pokemon : {pokemonData?.order}</p>
                            <p className="PokemonId">Id : {pokemonData?.id}</p>
                            <p className="PokemonWeight">Weight : {pokemonData?.weight}</p>
                            <p className="PokemonHeight">Height : {pokemonData?.height}</p>
                        </div>
                </div> 
            </div>
        </div>
        
        
        </>
    )
    
    
    }
    export default PokemonPage
