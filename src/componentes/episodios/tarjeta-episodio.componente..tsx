import './tarjeta-episodio.css';

interface Props {
    name?: string;
    date?: string;
    episode?: string;
}

/**Componente de tarjeta de episodio
    @param {Object} props
    @param {string} props.name
    @param {string} props.date
    @param {string} props.episode 
    @returns {JSX.Element} 
**/

/**Tarjeta para cada episodio dentro de la vista de personaje.**/
const TarjetaEpisodio = ({name, date, episode}: Props) => {
    return (
        <div className='tarjeta-episodio'>
            <h4>{name}</h4>
            <div>
                <span>{episode}</span>
                <span>Lanzado el: {date}</span>
            </div>
        </div>
    );
};
export default TarjetaEpisodio;

