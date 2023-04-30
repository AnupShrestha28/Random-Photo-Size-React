import React, { useEffect, useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos';

export default function App() {

  const [photos, setPhotos] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(photos.length > 0){
      setCurrentPhoto(photos[currentIndex])
    }
  }, [photos, currentIndex]);
  
  const handleChange = () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.log(err))

  }


  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div>
      <button onClick={handleChange}>Click Me</button>
      {currentPhoto && (
        <div key={currentPhoto.id}>
          <h3>{currentPhoto.title}</h3>
          <img src={currentPhoto.url} />
        </div>
      )}

      {currentIndex > 0 && (
        <button onClick={handlePrevious}>Previous</button>
      )}

      {currentIndex < photos.length - 1 && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  )
}
