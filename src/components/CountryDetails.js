

function CountryDetails(props) {
    return (
        <div className="col-5" style={{ maxHeight: '90vh'}}>
        {props.country.match.params.name}

    </div>
    )
};


export default CountryDetails;