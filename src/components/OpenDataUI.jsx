import { useEffect, useState } from 'react';
import '../styles/OpenDataUI.css';
import Header from './Header';
import headerImg from '../assets/openDataHeaderImg.png';
import axios from 'axios';

// API-url
const baseURL = 'https://dog.ceo/api/breeds/image/random'

function OpenDataUI() {

  const [randomImg, setRandomImg] = useState('');
  const [breed, setBreed] = useState('');

  // function that fetches a random image from the API
  const fetchRandomImage = () => {
    axios.get(baseURL)
      .then(resp => {
        // URL of the randomly fetched image
        const randomImgURL = resp.data.message
        setRandomImg(randomImgURL);

        // extract the breed from the URL and set it to its own state
        const parts = randomImgURL.split('/');
        const breedName = (parts[4].replace("-", " ")).toUpperCase();
        setBreed(breedName);
      })
      .catch(e => console.log(e.message));
  }

  // fetch a random image when the component loads
  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div className='open-data-content'>
      <Header
        image={headerImg}
        title={'Discover a Random Dog Image!'}
      />
      <RandomImageView
        randomImg={randomImg}
        breed={breed}
      />
      <RandomImageButton
        title={'Get random image'}
        handleClick={fetchRandomImage}
      />
    </div>
  );
}

export default OpenDataUI;

// randomImageView component to display the randomly fetched image
const RandomImageView = ({ randomImg, breed }) => {
  return (
    <>
      <div className='dog-image-container'>
        {randomImg ? (
          <img src={randomImg} alt='Random dog' className='random-dog-img' />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <p>{breed}</p>
    </>
  );
}

// Button component to select a new image
const RandomImageButton = ({ title, handleClick }) => {
  return (
    <button className='random-img-button' onClick={handleClick}>{title}</button>
  );
}
