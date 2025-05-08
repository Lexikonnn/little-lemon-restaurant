import { useState } from "react";
import { fetchAPI } from "https://raw.githubusercontent.com/courseraap/capstone/main/api.js"

export function useAvailableTimes() {
    const [times, setTimes] = useState([]);

    const updateTimes = (dateString) => {
        const date = new Date(dateString);
        const available = fetchAPI(date);
        setTimes(available);
    };
    return [times, updateTimes];
}