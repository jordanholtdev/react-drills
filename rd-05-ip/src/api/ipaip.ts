const fetchIp = async () => {
    const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    if (response.ok) {
        const data = response.json();
        return data;
    } else {
        return 'something went wrong';
    }
};

export default fetchIp;
