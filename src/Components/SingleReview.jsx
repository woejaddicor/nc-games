import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getComments, getReview} from '../Utils/api';
import styles from '../CSS-Components/SingleReview.module.css';
import Collapsible from 'react-collapsible'

const SingleReview = () => { 
    const [singleGame, setSingleGame] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {review_id} = useParams();
    const [comments, setComments] = useState([]);
    let [votes, setVotes] = useState(0);
    
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

    useEffect(() => {
        getComments(review_id).then((commentsFromApi) => {
            setComments(commentsFromApi);
        })
    }, [review_id]);


    if (isLoading) {
        return <h1>Content Loading</h1>
    } else {
    return (
        <>
        <section className={styles.SingleReview}>
               <h1>{singleGame.title}</h1>
               <img className={styles.singleReviewImage} src={singleGame.review_img_url}
                    alt={`${singleGame.title}`}/>
                <p>Category: {singleGame.category}</p>
                <p>Designer: {singleGame.designer}</p>
                <p>Created at: {singleGame.created_at}</p>
                <p>votes: {singleGame.votes}</p><button onClick={(e) => {
                    setVotes((singleGame.votes ++))
                }}>Vote</button>
                <p>{singleGame.review_body}</p>
        </section>
        <section>
            <h2>Comments</h2>
            <Collapsible className={styles.Collapsible} trigger="Show all">
                {comments.map((comment) => {
                    return (
                        <li className={styles.comments} key={comment.comment_id}>
                            <p>Author: {comment.author}</p>
                            <p>{comment.body}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>Created at: {comment.created_at}</p>
                        </li>
                    )
                })}
                </Collapsible>
        </section>
        </>
    )
  }
}

export default SingleReview;