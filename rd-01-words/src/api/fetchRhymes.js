const BASE_URL = 'https://api.datamuse.com/words?rel_rhy=';

export const fetchRhymes = (word) => {
    return fetch(`${BASE_URL}${word}`).then((res) => res.json());
};
