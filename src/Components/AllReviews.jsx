import React from "react";
import { useState, useEffect } from "react";
import { getAllReviews } from "../Utils/api";
import {Link} from 'react-router-dom';
import styles from '../CSS-Components/AllReviews.module.css';
import { useParams } from "react-router-dom";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortOption, setSortOption] = useState();
  
    useEffect(() => {
        setIsLoading(true);
        getAllReviews().then((reviewsFromApi) => {
            setReviews(reviewsFromApi)
            setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    if (isLoading) {
        return <h1>Content Loading</h1>
    } else {
    return (
        <section className={styles.allReviews}>
            <select className={styles.sortDropdown} name="sortOptions" required>
                <option value="" disabled selected>Sort By</option>
                <option value="created at">Created At</option>
                <option value="comment count">Comment Count</option>
                <option value="milk">Votes</option>
                </select>
            <ul className={styles.reviewsList}>
                {reviews.map((review) => {
                    return (
                        <li className={styles.reviewsList} key={review.review_id}>
                            <button className={styles.reviewsButton}><Link className={styles.linkText} to={`/reviews/${review.review_id}`}>
                            <h3>{review.title}</h3>
                            <img
                                className={styles.reviewImages}
                                alt={`${review.title}`}
                                src={review.review_img_url}
                            />
                            <p>{review.designer}</p>
                            <p>{review.owner}</p>
                            <p>{review.category}</p>
                            <p>{review.votes}</p>
                            </Link></button>
                        </li>
                    );
                })}
            </ul>
        </section>
    )  
  }
}
  
  export default AllReviews;
  