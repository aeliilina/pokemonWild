
import { useEffect, useState } from 'react';
import './Card.css'
import { useNavigate } from 'react-router-dom';
import './Card.css'



const Card = ({ name, image }) => {
    const navigate = useNavigate();

    return (
        <div className='cardWrapper' onClick={() => navigate(`pokemon/${name}`)}>
            <img src={image} alt={name} className='pokemonImage' />
            <p className='cardTitle'>{name}</p>
        </div>
    );
};

export default Card;

// const Card=(props)=>{


//     const navigate=useNavigate()
//     const {children,name}=props
    





// return (
//         <div className='cardWrapper' onClick={()=>navigate(`pokemon/${name}`)}>
//         <p className='cardTitle'>{children}</p> 
//         </div>

    
// )

// };

// export default Card





