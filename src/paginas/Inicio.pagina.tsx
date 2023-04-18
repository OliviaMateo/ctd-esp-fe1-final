import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {search} from "../redux/personajesSlice";
import {getPersonajes} from "../redux/personajesSlice";
import {useEffect} from "react";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * Uso: 
 * ``` <PaginaInicio /> ```
 */
const PaginaInicio = () => {
    const dispatch = useAppDispatch()
    const dataPersonaje = useAppSelector(state => state.personajes)

    useEffect(() => {
        dispatch(getPersonajes(''))
    }, [dispatch])

    const deleteFilter =()=>{
        dispatch(search(''))
        dispatch(getPersonajes(''))
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=> deleteFilter()}>Eliminar Filtro</button>
        </div>
        <Filtros />
        <Paginacion />
        {
            dataPersonaje.cargando? "Cargando informacion...": !dataPersonaje.personajes.length? "No se encontraron personajes." : 
            <GrillaPersonajes personajes={dataPersonaje.personajes}/>
        }
        <Paginacion />

    </div>
}
export default PaginaInicio
