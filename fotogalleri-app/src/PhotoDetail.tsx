import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { photos, Photo } from './Home';

const PhotoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!id) return;
    const foundPhoto = photos.find((p) => p.id === Number(id));
    setPhoto(foundPhoto || null);
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
