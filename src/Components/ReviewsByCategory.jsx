import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory } from "../Utils/api";
import { Link } from "react-router-dom";
import styles from '../CSS-Components/ReviewsByCategory.module.css';

const ReviewsByCategory = () => {
    const [categoryReviews, setCategoryReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const {category} = useParams();

    useEffect(() => {
        setIsLoading(true)
        getReviewsByCategory(category).then((reviewsFromApi) => {
        setCategoryReviews(reviewsFromApi);
        setIsLoading(false)
        })
        .catch((err) => {
            console.dir(err);
        })
    },   
 [category]);

    if (isLoading) {
        return <h1>Content Loading</h1>
    } else {
    return (
        <section className={styles.allCategoryReviews}>
            <ul className={styles.categoryReviewsList}>
                {categoryReviews.map((review) => {
                    return (
                            <button className={styles.categoryReviewButton}><Link className={styles.categoryLinkText} to={`/reviews/${review.review_id}`}>
                        <li className={styles.categoryReviewsList} key={review.review_id}>
                            <h3>{review.title}</h3>
                            <img
                                className={styles.categoryReviewImages}
                                alt={`${review.title}`}
                                src={review.review_img_url}
                            />
                            <h3>{review.category}</h3>
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
