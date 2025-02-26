import PhotoCard from './PhotoCard';
import img1 from './assets/img2.jpg';
import img2 from './assets/img3.jpg';
import img3 from './assets/img2.jpg';
import img4 from './assets/img3.jpg';
import img5 from './assets/img2.jpg';
import img6 from './assets/img3.jpg';
import film1 from './assets/film1.mp4';

export interface Photo {
  id: number;
  title: string;
  url: string;
  description?: string;
}

export const photos: Photo[] = [
  { id: 1, title: 'Bild 1', url: img1, description: 'Description for Bild 1' },
  { id: 2, title: 'Bild 2', url: img2, description: 'Description for Bild 2' },
  { id: 3, title: 'Bild 3', url: img3, description: 'Description for Bild 3' },
  { id: 4, title: 'Bild 4', url: img4, description: 'Description for Bild 4' },
  { id: 5, title: 'Bild 5', url: img5, description: 'Description for Bild 5' },
  { id: 6, title: 'Bild 6', url: img6, description: 'Description for Bild 6' },
];

type FilmItem = { type: 'film' };
type PhotoItem = { type: 'photo'; data: Photo };
type GalleryItem = FilmItem | PhotoItem;

// Fixed ordering: insert a film at position 3 and another at position 6.
const galleryItems: GalleryItem[] = [
  { type: 'photo', data: photos[0] },
  { type: 'photo', data: photos[1] },
  { type: 'film' },
  { type: 'photo', data: photos[2] },
  { type: 'photo', data: photos[3] },
  { type: 'film' },
  { type: 'photo', data: photos[4] },
  { type: 'photo', data: photos[5] },
];

const Home = () => {
  return (
    <div>
      <section className="intro">
        <h1>Gallery</h1>
        <p>Discover photos</p>
      </section>

      <section className="gallery-section">
        <div className="gallery">
          {galleryItems.map((item, index) =>
            item.type === 'film' ? (
              <div key={`film-${index}`} className="film-card">
                <video
                  src={film1}
                  autoPlay
                  muted
                  loop
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <PhotoCard key={item.data.id} photo={item.data} />
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
