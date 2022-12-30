interface ImageInterface {
    id: string;
    alt_description: string;
    likes: number;
    description: string;
    urls: {
        regular: string;
    };
}

export default ImageInterface;
