export const BASEURL = "https://randomuser.me/api/"

export const getAPI = async ({ endPoint = '', }) => {
    try {
        const url = `${BASEURL}${endPoint}`
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}