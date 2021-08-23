const API_BASE = 'http://localhost:8080/';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getFeedback: async () => {
        return[
            {
                slug: 'feedback',
                title: 'Feedback',
                items: await basicFetch ('http://localhost:8080/')
            }
        ]
    }
}