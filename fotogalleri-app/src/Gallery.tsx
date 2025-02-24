import { useState } from 'react';
import PhotoCard from './PhotoCard';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const Gallery = () => {
  const [photos] = useState<Photo[]>([
    { id: 1, title: 'Bild 1', url: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Bild 2', url: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Bild 3', url: 'https://via.placeholder.com/300' },
  ]);

  return (
    <div>
      <h1>Galleri</h1>
      <div className="gallery">
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
