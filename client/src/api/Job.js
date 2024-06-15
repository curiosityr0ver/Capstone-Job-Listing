import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:3000';


const fetchJobs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`);
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const fetchJobs = async ({ searchTerm, filters }) => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`, {
            params: {
                searchTerm,
                fullTime: filters.fullTime,
                partTime: filters.partTime,
                remote: filters.remote,
            },
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
};


export { fetchJobs };