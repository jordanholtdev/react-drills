import ImageInterface from '../interfaces/image';
import ImageCard from './ImageCard';

const ImageList = (props: { images?: Array<ImageInterface> }) => {
    const images = props.images?.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div>{images}</div>;
};

export default ImageList;
