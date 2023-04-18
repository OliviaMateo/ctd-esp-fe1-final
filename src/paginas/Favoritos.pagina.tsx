import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {deleteFavorites} from "../redux/personajesSlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const personajesFavoritos = useAppSelector(state => state.personajes.favoritos)

    const eliminarFavoritos =()=>{
        dispatch(deleteFavorites())
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=> eliminarFavoritos()}>Eliminar Todos</button>
        </div>
        <GrillaPersonajes personajes={personajesFavoritos}/>
    </div>
}
export default PaginaFavoritos

