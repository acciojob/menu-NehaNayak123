const Filter=({categoryList,selectedDish,setCategory})=>{
    const handleOnChangeCategory=(e)=>{
        setCategory(e.target.value);
    }
    return <div className="filter-container">
        {
            categoryList.map(category=>{
                return(
                    <div>
                        <input
                            id={category}
                            type="radio"
                            value={category}
                            checked={category === selectedDish}
                            name="category"
                            onChange={handleOnChangeCategory}
                        />
                        <label htmlFor={category}>{category}</label>
                    </div>
                )
            })
        }
    </div>
}

export default Filter
