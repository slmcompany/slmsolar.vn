import { Carousel } from 'antd';
import { useState } from 'react';

interface MediaContent {
    link: string;
    kind: string;
}

interface ImageCarouselProps {
    mediaContents: MediaContent[];
    title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ mediaContents, title }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const showVideoModal = (videoId: string) => {
        const modal = document.getElementById('video-modal');
        const iframe = document.getElementById('video-iframe') as HTMLIFrameElement;
        if (modal && iframe) {
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    };

    const handleSlideChange = (current: number) => {
        setCurrentSlide(current);
    };

    const getVideoThumbnail = (videoId: string) => {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    const getImageUrl = (media: MediaContent) => {
        if (media.kind === 'video') {
            return getVideoThumbnail(media.link);
        }
        return media.link;
    };

    return (
        <div className="relative">
            <Carousel 
                dots={false}
                afterChange={handleSlideChange}
                swipeToSlide
                touchMove
                draggable
                infinite
                slidesToShow={1}
                slidesToScroll={1}
                swipe
                touchThreshold={10}
                waitForAnimate
            >
                {mediaContents.map((media, index) => (
                    <div key={index} className="select-none">
                        <div className="relative aspect-square">
                            <img 
                                src={getImageUrl(media)}
                                alt={title}
                                className="w-full h-full object-cover"
                                draggable={false}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    if (media.kind === 'video') {
                                        target.src = getVideoThumbnail(media.link);
                                    }
                                }}
                            />
                            {media.kind === 'video' && (
                                <button 
                                    className="absolute inset-0 flex items-center justify-center"
                                    onClick={() => showVideoModal(media.link)}
                                >
                                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1 rounded m-2">
                {currentSlide + 1}/{mediaContents.length}
            </div>
        </div>
    );
};

export default ImageCarousel; 