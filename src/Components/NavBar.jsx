import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Utils/api";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
           setCategories(categoriesFromApi);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <nav className="navBar">
            <ul>
            {categories.map((category) => {
                return <Link>{category.slug_name}</Link>
            })}
            </ul>
        </nav>
    )
}

export default NavBar;