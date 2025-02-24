import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Photo {
  id: number;
  title: string;
  url: string;
  description: string;
}

const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    // Simulera en databas/fetch med statisk data
    const photoData: Photo = {
      id: Number(id),
      title: `Bild ${id}`,
      url: 'https://via.placeholder.com/600',
      description: 'Detta är en detaljerad beskrivning av bilden.',
    };
    setPhoto(photoData);
  }, [id]);

  if (!photo) return <p>Laddar bild...</p>;

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} />
      <p>{photo.description}</p>
    </div>
  );
};

export default PhotoDetail;
