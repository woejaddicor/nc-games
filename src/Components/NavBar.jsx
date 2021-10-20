import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../Utils/api";
import styles from '../CSS-Components/NavBar.module.css';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
           setCategories(categoriesFromApi);
        })
        .catch((error) => {
            console.dir(error);
        });
    }, []);

    return (
        <nav className={styles.navBar}>
          <ul className={styles.categoriesList}>
            {categories.map((category) => {
                 return (
                     <li className={styles.categoriesListItems} key={category.slug}>
                       <button className={styles.categoriesButton}><Link className={styles.categorieslinks} to={`/categories/${category.slug}`}>{category.slug}</Link></button>
                    </li>
                 )
             })}
            </ul>
        </nav>
    )
}

export default NavBar;