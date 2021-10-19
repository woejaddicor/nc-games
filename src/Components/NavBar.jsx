import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Utils/api";

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            console.log(categoriesFromApi);
           setCategories(categoriesFromApi);
        })
        .catch((error) => {
            console.dir(error);
        });
    }, []);

    return (
        <nav className="navBar">
          <ul className="categories-list">
            {categories.map((category) => {
                 return (
                     <li className="categories-list-items" key={category.slug}>
                 <Link className="categories-links" to={`/categories/${category.slug}`}>{category.slug}</Link>
                 </li>
                 )
             })}
            </ul>
        </nav>
    )
}

export default NavBar;