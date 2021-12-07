export const CountryItem = ({ country }) => {
    return <div className="col-12">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${(country?.alpha2Code || '').toLowerCase()}.png`} />
        <h5 className="col-12" >
            {country?.name?.common}
        </h5>
    </div>
}