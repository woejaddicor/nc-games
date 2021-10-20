import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://primero-games.herokuapp.com/api'
})

export const getCategories = async () => {
    const {data} = await gamesApi.get('/categories')
    return data.categories;
}

export const getAllReviews = async () => {
    const {data} = await gamesApi.get('/reviews')
    return data.reviews;
}

export const getReviewsByCategory = async (category) => {
    const {data} = await gamesApi.get(`/reviews?category=${category}`)
    return data.reviews;
}

export const getReview = async (review_id) => {
    const {data} = await gamesApi.get(`/reviews/${review_id}`)
    return data.review;  
}