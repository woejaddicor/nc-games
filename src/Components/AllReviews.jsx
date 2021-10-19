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
            <ul>
                {reviews.map((review) => {
                    return (
                        <li key={review.review_id}>
                            <h3>{review.review_id}</h3>
                        </li>
                    );
                })}
            </ul>
        </section>
    )  
  };
  
  export default AllReviews;
  