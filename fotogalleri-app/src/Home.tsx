import PhotoCard from './PhotoCard';
import img1 from './assets/img2.jpg';
import img2 from './assets/img3.jpg';
import img3 from './assets/img2.jpg';
import img4 from './assets/img3.jpg';
import img5 from './assets/img2.jpg';
import img6 from './assets/img3.jpg';

export interface Photo {
  id: number;
  title: string;
  url: string;
  span?: number;
  description?: string;
}

export const photos: Photo[] = [
  { id: 1, title: 'Bild 1', url: img1, span: 1, description: 'Description for Bild 1' },
  { id: 2, title: 'Bild 2', url: img2, span: 2, description: 'Description for Bild 2' },
  { id: 3, title: 'Bild 3', url: img3, span: 1, description: 'Description for Bild 3' },
  { id: 4, title: 'Bild 4', url: img4, span: 2, description: 'Description for Bild 4' },
  { id: 5, title: 'Bild 5', url: img5, span: 1, description: 'Description for Bild 5' },
  { id: 6, title: 'Bild 6', url: img6, span: 1, description: 'Description for Bild 6' },
];

const Home = () => {
  return (
    <div>
      <section className="intro">
        <h1>Welcome to the Photo Gallery</h1>
        <p>Discover a curated collection of beautiful images.</p>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
