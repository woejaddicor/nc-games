import axios from 'axios';

const gamesApi = axios.create({
    baseUrl: 'https://primero-games.herokuapp.com/api',
})

export const getCategories = async () => {
    const {data} = await gamesApi.get('/categories')
    return data.Categories;
}

export const getAllReviews = async () => {
    const {data} = await gamesApi.get('/reviews')
    console.log(data);
    return data.reviews;
}
