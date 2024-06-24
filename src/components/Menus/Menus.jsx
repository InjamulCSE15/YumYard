import { useState, useEffect } from 'react'
import axios from "axios";
import Menu from '../Menu/Menu'

const Menus = () => {
    const [menus, setMenus] = useState([]);
    const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setMenus(res.data.categories.slice(0, 8));
        })
    }, [menus])
    return (
        <div className='py-8'>
            <small className='text-[#713F12] font-bold text-xl' >Our Menu</small>
            <h1 className='text-5xl font-bold py-3'>Menu that always<br />make you fall in love</h1>           
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-6">
                {
                 menus.map(menu => <Menu key={menu.idCategory} menu={menu}></Menu>)
                }
            </div>
        </div>
    )
}

export default Menus