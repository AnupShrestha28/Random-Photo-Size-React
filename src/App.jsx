import React from 'react';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setPhotos(data))
      // .catch(error => console.log(error));
  };

  useEffect(() => {
    if (photos.length > 0) {
      setCurrentPhoto(photos[currentIndex]);
    }
  }, [photos, currentIndex]);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {currentPhoto && (
        <div key={currentPhoto.id}>
          <h3>{currentPhoto.title}</h3>
          <img src={currentPhoto.url} alt={currentPhoto.title} />
          {currentIndex > 0 && (
            <button onClick={handlePrevious}>Previous</button>
          )}
          {currentIndex < photos.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;