import React from "react";
import { useState, useEffect } from "react";
import { getAllReviews } from "../Utils/api";

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
        getAllReviews().then((reviewsFromApi) => {
            setReviews(reviewsFromApi)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
        <section className="allReviews">
            <h2>All Reviews</h2>
            <ul className="reviews-list">
                {reviews.map((review) => {
                    return (
                        <li className="reviews-list" key={review.review_id}>
                            <h3>{review.title}</h3>
                            <img
                                className="review-images"
                                alt={`${review.title}`}
                                src={review.review_img_url}
                            />
                            <p>{review.designer}</p>
                            <p>{review.owner}</p>
                            <p>{review.review_body}</p>
                            <p>{review.category}</p>
                            <p>{review.votes}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    )  
  };
  
  export default AllReviews;
  