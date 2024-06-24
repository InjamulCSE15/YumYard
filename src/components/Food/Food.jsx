
const Food = ({food}) => {
    const {idCategory, strCategory, strCategoryDescription, strCategoryThumb} = food;
    return (
        <article className="card bg-base-100 rounded-lg shadow hover:shadow-xl">
            <figure>
                <img src={strCategoryThumb} alt={strCategory} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p className="truncate">{strCategoryDescription}</p>
                <div className="card-actions">
                    <button className="btn btn-block bg-[#713f12] text-white text-xl hover:text-[#713f12] hover:bg-white hover:border hover:border-[#713f12]">View Details</button>
                </div>
            </div>
        </article>
    )
}

export default Food