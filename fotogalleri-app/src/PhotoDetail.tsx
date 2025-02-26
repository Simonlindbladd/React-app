// src/PhotoDetail.tsx
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
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <img
        src={photo.url}
        alt={photo.title}
        style={{
          maxWidth: '400px',
          width: '100%',
          height: 'auto',
          margin: '310px auto 0',
          display: 'block',
        }}
      />
      <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#333' }}>
        {photo.description}
      </p>
    </div>
  );
};

export default PhotoDetail;
