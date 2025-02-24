import PhotoCard from './PhotoCard';

const photos = [
  { id: 1, title: 'Bild 1', url: 'https://picsum.photos/seed/1/500/300' },
  { id: 2, title: 'Bild 2', url: 'https://picsum.photos/seed/2/500/300' },
  { id: 3, title: 'Bild 3', url: 'https://picsum.photos/seed/3/500/300' },
  { id: 4, title: 'Bild 4', url: 'https://picsum.photos/seed/4/500/300' },
  { id: 5, title: 'Bild 5', url: 'https://picsum.photos/seed/5/500/300' },
  { id: 6, title: 'Bild 6', url: 'https://picsum.photos/seed/6/500/300' },
];

const Home = () => {
  return (
    <div>
      {/* Introductory Section */}
      <section className="intro">
        <h1>Welcome to the Photo Gallery</h1>
        <p>Discover a curated collection of beautiful images.</p>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery">
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
