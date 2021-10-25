import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getComments, getReview, updateVotes, updateComments, deleteComment} from '../Utils/api';
import styles from '../CSS-Components/SingleReview.module.css';
import Collapsible from 'react-collapsible'
import { UserContext } from '../Contexts/UserContext';

const SingleReview = () => { 
    const [singleGame, setSingleGame] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const {review_id, comment_id} = useParams();
    const [comments, setComments] = useState([]);
    const [votes, setVotes] = useState(0);
    const {user} = useContext(UserContext)
    const [postedComment, setPostedComment] = useState('');
    
    useEffect(() => {
        setIsLoading(true)
        getReview(review_id).then((reviewFromApi) => {
            setSingleGame(reviewFromApi[0]);
            setIsLoading(false);
            setVotes(Number(reviewFromApi[0].votes))
        })
        .catch((err) => {
            console.dir(err)
        });
    }, [review_id]);


    useEffect(() => {
        getComments(review_id, comment_id).then((commentsFromApi) => {
            setComments(commentsFromApi);
        })
    }, [review_id]);

    const handleVotes = () => {
        setVotes((currVotes) => currVotes + 1)
        updateVotes(review_id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateComments(review_id, user, postedComment)
        setPostedComment('')
    }

    const handleDelete = () => {
        deleteComment(comment_id)
    }

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
                <button onClick={handleVotes} className={styles.voteIncButton}>Current Votes: {votes}</button>
                <p>{singleGame.review_body}</p>
        </section>
        <section className={styles.commentsCollapsible}>
            <h2>Comments</h2>
          <button type="submit" className={styles.commentsButton}><Collapsible className={styles.Collapsible} trigger="Show all">
                <form onSubmit={handleSubmit}>
                <label htmlFor="comment"></label>
                <input className={styles.commentBox} type="text" id="comment" disabled={!user} placeholder={user ? `Logged in as ${user}` : 'Please login to comment'} onChange={(e) => {
                    setPostedComment(e.target.value)
                }}/> 
                <button type="submit" className={styles.postCommentButton}>Post Comment</button>
                </form>
                {comments.map((comment) => {
                    return (
                        <li className={styles.comments} key={comment.comment_id}>
                            <p>Author: {comment.author}</p>
                            <p>{comment.body}</p>
                            <h4>Comment Votes: {comment.votes}</h4>
                            <p>{comment.created_at}</p>
                            <button disabled={user !== comment.author} onClick={handleDelete} className={styles.deleteCommentButton}>Delete Comment</button>
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