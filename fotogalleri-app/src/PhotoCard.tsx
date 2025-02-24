import { Link } from 'react-router-dom';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface Props {
  photo: Photo;
}

const PhotoCard = ({ photo }: Props) => {
  return (
    <Link to={`/photo/${photo.id}`} className="photo-card">
      <img src={photo.url} alt={photo.title} />
    </Link>
  );
};

export default PhotoCard;
