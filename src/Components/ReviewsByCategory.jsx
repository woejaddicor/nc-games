import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory } from "../Utils/api";
import { Link } from "react-router-dom";
import styles from '../CSS-Components/ReviewsByCategory.module.css';
import Collapsible from "react-collapsible";

const ReviewsByCategory = () => {
    const [categoryReviews, setCategoryReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState(null);
    const {category} = useParams();

    useEffect(() => {
        setIsLoading(true)
        getReviewsByCategory(category, sortBy).then((reviewsFromApi) => {
        setCategoryReviews(reviewsFromApi);
        setIsLoading(false)
        })
        .catch((err) => {
           console.dir(err)
        })
    },   
 [category, sortBy]);

 const handleSort = (e) => {
    e.preventDefault()
    setSortBy(e.target.value);
}

    if (isLoading) {
        return <h1>Content Loading</h1>
    } else {
    return (
        <section className={styles.allCategoryReviews}>
            <select className={styles.sortDropdown} name="sort-reviews" id="sort-reviews" onChange={handleSort}>
                    <option defaultValue disabled>Sort By</option>
                    <option value="created_at">Created At</option>
                    <option value="votes">Votes</option>
              </select>
            <ul className={styles.categoryReviewsList}>
                {categoryReviews.map((review) => {
                    return (
                            <button className={styles.categoryReviewButton}><Link className={styles.categoryLinkText} to={`/reviews/${review.review_id}`}>
                        <li className={styles.categoryReviewsList} key={review.review_id}>
                            <h2 className={styles.reviewTitle}> {review.title}</h2>
                            <img
                                className={styles.categoryReviewImages}
                                alt={`${review.title}`}
                                src={review.review_img_url}
                            />
                            <Collapsible className={styles.Collapsible} trigger="Show More">
                            <h3>{review.category}</h3>
                            <p>Created at: {review.created_at}</p>
                            <p>Comments: {Number(review.comment_count)}</p>
                            <p>Votes: {review.votes}</p>
                            </Collapsible>
                        </li>
                        </Link></button>
                    )
                })}
            </ul>
        </section>
    )            
  }
}


export default ReviewsByCategory;
