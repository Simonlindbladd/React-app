import { Link } from 'react-router-dom';

interface Photo {
  id: number;
  title: string;
  url: string;
  span: number;
}

interface Props {
  photo: Photo;
}

const PhotoCard = ({ photo }: Props) => {
  return (
    <Link
      to={`/photo/${photo.id}`}
      className="photo-card"
      style={{ gridColumn: `span ${photo.span}` }}
    >
      <img src={photo.url} alt={photo.title} />
    </Link>
  );
};

export default PhotoCard;
