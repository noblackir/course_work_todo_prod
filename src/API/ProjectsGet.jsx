import axios from 'axios';
export default class ProjectsGet {
    static async getAll(limit = 2, page = 0) {
        const response = await axios.get('http://localhost:8080/projects'
            , {
                params: {
                    page: page,
                    size: limit
                }
            }
        );
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:8080/games/detail/${id}`)
        return response;
    }

    static async getCart(id) {
        const response = await axios.get(`http://localhost:8080/wishlist/${id}`)
        return response;
    }

    static async deleteFromCart(id, game_id) {
        const response = await axios.delete(`http://localhost:8080/wishlist/${id}/${game_id}`)
        return response;
    }

    static async getImageById(id){
        const response = await axios.get(`http://localhost:8080/images/${id}`)
        return response;
    }

    static async getGameByGenre(genre){
        const response = await axios.get(`http://localhost:8080/games/${genre}`)
        return response;
    }

    static async getGenres(){
        const response = await axios.get(`http://localhost:8080/genre`)
        return response;
    }
}