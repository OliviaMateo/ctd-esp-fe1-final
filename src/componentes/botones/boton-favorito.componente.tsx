import './boton-favorito.css';
import './boton-favorito.css';
import {useAppDispatch} from '../../redux/hooks';
import {Personaje} from '../../types/personaje.type';
import {favoritos} from '../../redux/personajesSlice';


interface Props {
    esFavorito?: boolean;
    onClick?:Personaje 
}

/**
 * Componente de botón de favorito
 * @param {Object} props 
 * @param {boolean} props.esFavorito 
 * @returns {JSX.Element} 
 **/


/**Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo**/
const BotonFavorito = ({esFavorito,onClick} : Props) => {
    const src = esFavorito ? '/imagenes/star-filled.png' : '/imagenes/star.png';
    const dispatch =useAppDispatch();
    const favorito= (personaje?: Personaje)=>{
    dispatch(favoritos(personaje))
}

    return (
        <div className='boton-favorito' onClick={()=>favorito(onClick)}>
            <img src={src} alt={'favorito'} />
        </div>
    );
};
export default BotonFavorito;


