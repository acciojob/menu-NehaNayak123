const Filter=({categoryList,selectedDish,setCategory})=>{
    const handleOnChangeCategory=(e)=>{
        setCategory(e.target.value);
    }
    return <div>
        {
            categoryList.map(category=>{
                return(
                    <div className="filter-container">
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