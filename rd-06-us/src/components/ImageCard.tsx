import ImageInterface from '../interfaces/image';
import React from 'react';

const ImageCard = React.forwardRef((props: { image: ImageInterface }, ref) => {
    return (
        <div>
            <img
                alt={props.image.alt_description}
                src={props.image.urls.regular}
            />
        </div>
    );
});

export default ImageCard;
