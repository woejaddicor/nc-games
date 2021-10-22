import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://primero-games.herokuapp.com/api'
})

export const getCategories = async () => {
    const {data} = await gamesApi.get('/categories')
    return data.categories;
}

export const getAllReviews = async (sortBy) => {
    const {data} = await gamesApi.get("/reviews", {
        params: {
          sort_by: sortBy
        },
      })
      console.log(data.reviews)
    return data.reviews
}

export const getReviewsByCategory = async (category, sortBy) => {
    const {data} = await gamesApi.get(`/reviews?category=${category}`, {
    params: {
        sort_by: sortBy
      },
    }) 
    return data.reviews;
}

export const getReview = async (review_id) => {
    const {data} = await gamesApi.get(`/reviews/${review_id}`)
    return data.review;  
}

export const getComments = async (review_id) => {
    const {data} = await gamesApi.get(`/reviews/${review_id}/comments`)
    return data.comments;
}

export const updateVotes = async (review_id) => {
    await gamesApi.patch(`/reviews/${review_id}`, {inc_votes: 1})
}

export const updateComments = async (review_id, username, body) => {
    await gamesApi.post(`/reviews/${review_id}/comments`, {username, body})
}