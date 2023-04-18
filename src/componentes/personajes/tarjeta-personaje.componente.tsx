import {useAppSelector} from '../../redux/hooks';
import {Personaje} from '../../types/personaje.type';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


interface Props {
    personaje:Personaje
}

/*Tarjeta para cada personaje dentro de la grilla de personajes.
* Deberás agregar las propiedades necesarias para mostrar los datos de los personajes**/

const TarjetaPersonaje = ({personaje}:Props) => {
    const storeFavoritos = useAppSelector(state => state.personajes.favoritos)
    const favorito = storeFavoritos.find(item => item.id === personaje.id)

    return (
        <div className="tarjeta-personaje">
            <img src={personaje.image} alt={personaje.name} />
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <BotonFavorito 
                    esFavorito={favorito? true : false}
                    onClick={personaje}
                />
            </div>
        </div>
    );
}
export default TarjetaPersonaje;
