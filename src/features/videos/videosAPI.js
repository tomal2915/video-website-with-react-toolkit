import axios from "axios";

export const getVideos = async () => {
    // const response = await fetch("");
    // const data = await response.json();
    // return data;

    const response = await axios.get("/videos");
    return response.data;
};