import PhotoCard from './PhotoCard';
import img1 from './assets/img2.jpg';
import img2 from './assets/img3.jpg';
import img3 from './assets/img2.jpg';
import img4 from './assets/img3.jpg';
import img5 from './assets/img2.jpg';
import img6 from './assets/img3.jpg';
import film1 from './assets/film1.mp4';
import film2 from './assets/film2.mp4';

export interface Photo {
  id: number;
  title: string;
  url: string;
  description?: string;
}

export const photos: Photo[] = [
  { id: 1, title: 'Bild 1', url: img1, description: 'En bild' },
  { id: 2, title: 'Bild 2', url: img2, description: 'En bild' },
  { id: 3, title: 'Bild 3', url: img3, description: 'En bild' },
  { id: 4, title: 'Bild 4', url: img4, description: 'En bild' },
  { id: 5, title: 'Bild 5', url: img5, description: 'En bild' },
  { id: 6, title: 'Bild 6', url: img6, description: 'En bild' },
];

type FilmItem = { type: 'film'; video: string };
type PhotoItem = { type: 'photo'; data: Photo };
type GalleryItem = FilmItem | PhotoItem;

// Row 1: Photo 1, Film1, Photo 2, Film2, Photo 3
// Row 2: Photo 4, Film1, Photo 5, Film2, Photo 6
const galleryItems: GalleryItem[] = [
  { type: 'photo', data: photos[0] },
  { type: 'film', video: film1 },
  { type: 'photo', data: photos[1] },
  { type: 'film', video: film2 },
  { type: 'photo', data: photos[2] },
  { type: 'photo', data: photos[3] },
  { type: 'film', video: film1 },
  { type: 'photo', data: photos[4] },
  { type: 'film', video: film2 },
  { type: 'photo', data: photos[5] },
];

const Home = () => {
  return (
    <div>
     
     <section className="intro" style={{ textAlign: 'center', marginBottom: '2rem' }}>
  <div
    className="logo"
    style={{
      fontSize: '4rem',
      fontWeight: 'bold',
      color: 'blue',
      marginBottom: '1rem'
    }}
  >
    Gallery
  </div>
  <p style={{ fontSize: '1.2rem' }}>-Discover photos-</p>
</section>



      <section className="gallery-section">
        <div
          className="gallery"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {galleryItems.map((item, index) =>
            item.type === 'film' ? (
              <div key={`film-${index}`} className="film-card">
                <video
                  src={item.video}
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
