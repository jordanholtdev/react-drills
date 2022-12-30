import { useEffect, useState } from 'react';
import unsplash from './apis/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import './App.css';

function App() {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term: string) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        setImages(response.data.results);
    };

    return (
        <div className='App'>
            <SearchBar onSubmit={onSearchSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
