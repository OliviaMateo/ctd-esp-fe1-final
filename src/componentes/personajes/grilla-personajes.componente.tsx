import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import {Personaje} from '../../types/personaje.type';

interface Props {
    personajes: Personaje[];
}

/**
 * Componente de grilla de personajes
 * @param {Object} props 
 * @param {Array<Object>} props.personajes
 * @returns {JSX.Element} 


*Deberás agregar las funciones necesarias para mostrar y paginar los personajes**/
const GrillaPersonajes = ({personajes}:Props) => {
    
    return <div className="grilla-personajes">
        {personajes && personajes.map((personaje) => (
                <TarjetaPersonaje 
                personaje={personaje} 
                key={personaje.id.toString()}/>
            ))
        }
    </div>
}
export default GrillaPersonajes;


