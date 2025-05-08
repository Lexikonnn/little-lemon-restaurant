import { useState } from "react";
import { fetchAPI } from "../utils/api";

export function useAvailableTimes() {
    const [times, setTimes] = useState([]);

    const updateTimes = (dateString) => {
        const date = new Date(dateString);
        const available = fetchAPI(date);
        setTimes(available);
    };
    return [times, updateTimes];
}