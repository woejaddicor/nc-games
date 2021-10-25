import { useState, useEffect } from "react";
import { getAllReviews } from "../Utils/api";
import {Link} from 'react-router-dom';
import styles from '../CSS-Components/AllReviews.module.css';
import Collapsible from "react-collapsible";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getAllReviews(sortBy).then((reviewsFromApi) => {
            setReviews(reviewsFromApi)
            setIsLoading(false)    
        })
        .catch((error) => {
          setErr(err)
        });
    }, [sortBy, err]);

    const handleSort = (e) => {
        e.preventDefault()
        setSortBy(e.target.value);
    }

    if (isLoading) {
        return <h1>Content Loading</h1>
    } else {
    return (
        <section className={styles.allReviews}>
                <select className={styles.sortDropdown} name="sort-reviews" id="sort-reviews" onChange={handleSort}>
                    <option defaultValue disabled>Sort By</option>
                    <option value="created_at">Created At</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
              </select>
            <ul className={styles.reviewsList}>
                {reviews.map((review) => {
                    return (
                      <button key={review.review_id} className={styles.reviewsButton}><Link className={styles.linkText} to={`/reviews/${review.review_id}`}>
                        <li className={styles.reviewsList}>
                            <h2 className={styles.reviewTitle}>{review.title}</h2>
                            <img
                                className={styles.reviewImages}
                                alt={`${review.title}`}
                                src={review.review_img_url}/>
                            <Collapsible className={styles.Collapsible} trigger="See More">
                            <h3>{review.category}</h3>
                            <p>Created at: {review.created_at}</p>
                            <p>Comments: {Number(review.comment_count)}</p>
                            <p>Votes: {review.votes}</p>
                            </Collapsible>
                        </li>
                      </Link></button>
                    );
                })}
            </ul>
        </section>
    )  
  }
};
  
  export default AllReviews;
  