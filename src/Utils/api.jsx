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


{/* <nav className="navBar">
          <ul>
            {categories.map((category) => {
                 return (
                 <Link to={`/categories/${category.slug}`}>{category.slug}</Link>
                 )
             })}
            </ul>
        </nav> */}
