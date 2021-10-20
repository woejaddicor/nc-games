import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {getComments, incVote, getReview} from '../Utils/api';
import styles from '../CSS-Components/SingleReview.module.css';
import Collapsible from 'react-collapsible'

const SingleReview = () => { 
    const [singleGame, setSingleGame] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErr, setIsErr] = useState(false);
    const {review_id} = useParams();
    const [comments, setComments] = useState([]);
    const [votes, setVotes] = useState();
    
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
                <p>votes: {singleGame.votes}</p><button className={styles.voteIncButton}>Upvote Review</button>
                <p>{singleGame.review_body}</p>
        </section>
        <section className={styles.commentsCollapsible}>
            <h2>Comments</h2>
          <button className={styles.commentsButton}><Collapsible className={styles.Collapsible} trigger="Show all">
                <form>
                <label htmlFor="comment"></label>
                <input className={styles.commentBox} type="text" id="comment" placeholder="Post your comment"/> 
                <button className={styles.postCommentButton}>Post Comment</button>
                </form>
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
                </Collapsible></button>
        </section>
        </>
    )
  }
}

export default SingleReview;