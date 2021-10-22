import React from "react";
import { useState, useEffect } from "react";
import { getAllReviews } from "../Utils/api";
import {Link} from 'react-router-dom';
import styles from '../CSS-Components/AllReviews.module.css';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState(null);

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
            <select className={styles.sortDropdown} name="sortOptions">
                <option value="" disabled defaultValue>Sort By</option>
                <option value="created at">Created At</option>
                <option value="comment count">Comment Count</option>
                <option value="milk">Votes</option>
                </select>
            <ul className={styles.reviewsList}>
                {reviews.map((review) => {
                    return (
                      <button className={styles.reviewsButton}><Link className={styles.linkText} to={`/reviews/${review.review_id}`}>
                        <li className={styles.reviewsList} key={review.review_id}>
                            <h3>{review.title}</h3>
                            <img
                                className={styles.reviewImages}
                                alt={`${review.title}`}
                                src={review.review_img_url}/>
                            <h3>{review.category}</h3>
                            <p>Created at: {review.created_at}</p>
                            <p>Comments: {review.comment_count}</p>
                            <p>Votes: {review.votes}</p>
                        </li>
                      </Link></button>
                    );
                })}
            </ul>
        </section>
    )  
  }
}
  
  export default AllReviews;
  