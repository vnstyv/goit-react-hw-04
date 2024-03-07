import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImg = async (searchQuery, page) => {
    const API_KEY = 'xZf1XNH5TjboId1qikaVp0ouOxe5Bwp6wZrSWwhBWNs';

    const responce = await axios.get('/search/photos', {
        params: {
            query: searchQuery,
            per_page: 12,
            page,
        },
        headers: {
           Authorization: `Client-ID ${API_KEY}`,
       }, 
    });
    return responce.data.results;
};
