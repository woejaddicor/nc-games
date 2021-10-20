import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getReview} from '../Utils/api';
import styles from '../CSS-Components/SingleReview.module.css';


const SingleReview = () => { 
    const [singleGame, setSingleGame] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {review_id} = useParams();

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        getReview(review_id).then((reviewFromApi) => {
            setSingleGame(reviewFromApi[0]);
            setIsLoading(false);
        })
        .catch((err) => {
            console.dir(err)
        });
    }, [review_id]);

    if (isLoading) {
        return <h1>Content Loading</h1>
    } else {
    return (
        <section className={styles.SingleReview}>
               <h1>{singleGame.title}</h1>
               <img className={styles.singleReviewImage} src={singleGame.review_img_url}
                    alt={`${singleGame.title}`}/>
                <p>{singleGame.category}</p>
                <p>{singleGame.designer}</p>
                <p>{singleGame.created_at}</p>
                <p>votes: {singleGame.votes}</p>
                <p>{singleGame.review_body}</p>
        </section>
    )
  }
}

export default SingleReview;