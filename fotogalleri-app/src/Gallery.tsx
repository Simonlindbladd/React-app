import { useState } from 'react';
import PhotoCard from './PhotoCard';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const Gallery = () => {
  const [photos] = useState<Photo[]>([
    { id: 1, title: 'Bild 1', url: 'https://picsum.photos/seed/pic1/300/200' },
    { id: 2, title: 'Bild 2', url: 'https://picsum.photos/seed/pic2/300/200' },
    { id: 3, title: 'Bild 3', url: 'https://picsum.photos/seed/pic3/300/200' },
    { id: 4, title: 'Bild 4', url: 'https://picsum.photos/seed/pic4/300/200' },
    { id: 5, title: 'Bild 5', url: 'https://picsum.photos/seed/pic5/300/200' },
    { id: 6, title: 'Bild 6', url: 'https://picsum.photos/seed/pic6/300/200' },
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
