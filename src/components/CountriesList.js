import {Link} from 'react-router-dom'

const CountriesList = (props) => {
    return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>



        {props.paises.map(country => {
            return (
            
            <div class="list-group">
                <Link className='list-group-item list-group-item-action' 
                to={'/{ }'}
                key={}>
                <img src={} alt={}/>
                <p>{}</p>
                </Link>
            </div>
            )
        })}

    </div>
    );
}

export default CountriesList