function CountryDetails(props){

    return(
        <div className="country-details">
            <h1>{props.name}</h1>
            <h2>{props.capital}</h2>
            <h2>{props.currency}</h2>
        </div>
    )
}

export default CountryDetails