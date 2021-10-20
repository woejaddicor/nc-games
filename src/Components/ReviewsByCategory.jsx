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
        <section className="category-reviews">
            <ul>
                {categoryReviews.map((review) => {
                    return (
                        <li className={styles.categoryReviewsList} key={review.review_id}>
                            <button><Link to={`/reviews/${review.review_id}`}>
                            <h3>{review.title}</h3>
                            <img
                                className={styles.categoryReviewImages}
                                alt={`${review.title}`}
                                src={review.review_img_url}
                            />
                            <p>{review.designer}</p>
                            <p>{review.owner}</p>
                            <p>{review.category}</p>
                            <p>{review.votes}</p>
                        </Link></button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )            
  }
}


export default ReviewsByCategory;
