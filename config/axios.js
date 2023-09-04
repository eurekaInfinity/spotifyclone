import axios from 'axios';

export const consultaAxios = async (options) => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}