const Dishes=({dishes})=>{
    return (
        <div className="dish-container">
            {dishes.map(dish=>{
                return <div className="dish-card">
                    <img src={dish.img}/>
                    <div>
                        <div className="titlePrice">
                            <b>{dish.title}</b>
                            <span>{dish.price}</span>
                        </div>
                        <p>{dish.desc}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Dishes