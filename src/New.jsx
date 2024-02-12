function New(props) {
    return(
        <div className="new-1">
            <h2>{props.name}</h2>
            <h2>{props.price[1]}</h2>
            <h2>{props.series.dayone}</h2>
        </div>
        
        
    )
}

export default New