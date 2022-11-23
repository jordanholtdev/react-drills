import { useState } from 'react';
import { fetchRhymes } from '../api/fetchRhymes';

export const useGetRhymes = () => {
    const [rhymeList, setRhymeList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getRhymes = (word) => {
        setIsLoading(true);
        fetchRhymes(word)
            .then(setRhymeList)
            .then(() => setIsLoading(false));
    };

    return { isLoading, rhymeList, getRhymes };
};
