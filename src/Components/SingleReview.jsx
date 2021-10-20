import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getReview} from '../Utils/api';


const ShowSingleReview = () => { 
    const [singleGame, setSingleGame] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const {review_id} = useParams();

    useEffect(() => {
        setIsLoading(true)
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
        <section className="single-review">
               <h1>{singleGame.title}</h1>
               <img className="review-images" src={singleGame.review_img_url}
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

export default ShowSingleReview;