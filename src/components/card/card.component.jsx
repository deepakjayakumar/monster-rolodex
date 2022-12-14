
import './card.styles.css'

const Card =  ({monster:{id,name,email}}) => (
            <div className="card-container" key={id}>
            <img alt={name} src={`https://robohash.org/${id}?set=set4&size=180x180`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        );
export default Card;