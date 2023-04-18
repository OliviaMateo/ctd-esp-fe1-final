import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {search} from '../../redux/personajesSlice';
import {getPersonajes} from '../../redux/personajesSlice';
import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch()
    const value= useAppSelector(state => state.personajes.busqueda)

    const busqueda = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(search(e.target.value))
        dispatch(getPersonajes(e.target.value))
    }
    return (
        <div className="filtros">
            <label htmlFor="nombre">Filtrar por nombre:</label>
            <input
                type="text"
                placeholder="Rick, Morty, Beth, Alien, ...etc"
                name="nombre"
                value={value}
                onChange={(e) => busqueda(e)}
            />
        </div>
    );
}
export default Filtros;

