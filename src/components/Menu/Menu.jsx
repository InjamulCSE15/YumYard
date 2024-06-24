
const Menu = ({menu}) => {
    const {strCategory, strCategoryThumb} = menu;
    return (
        <div className="flex flex-col mr-5 text-center mb-11 lg:mr-16">
              <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem] bg-[#713f12]">
                <img className="inline-block shrink-0 rounded-[.95rem] h-[150px]" src={strCategoryThumb} alt={strCategory} />
              </div>
              <div className="text-center">
                <span className="text-dark font-semibold hover:text-[#713f12] text-[1.25rem] transition-colors duration-200 ease-in-out">{strCategory}</span>
              </div>
            </div>
    )
}

export default Menu