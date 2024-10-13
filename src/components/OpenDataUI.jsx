import { useEffect, useState } from 'react';
import '../styles/OpenDataUI.css';
import Header from './Header';
import headerImg from '../assets/openDataHeaderImg.png';
import axios from 'axios';

// api-osoite
const baseURL = 'https://dog.ceo/api/breeds/image/random'

function OpenDataUI() {

  const [randomImg, setRandomImg] = useState('');
  const [breed, setBreed] = useState('');

  // // funktio joka noutaa randomin kuvan rajapinnasta
  const fetchRandomImage = () => {
    axios.get(baseURL)
      .then(resp => {
        // randomisti haetun kuvan url
        const randomImgURL = resp.data.message
        setRandomImg(randomImgURL);

        // puretaan rotu URL:sta ja asetetaan se omaan tilaan
        const parts = randomImgURL.split('/');
        const breedName = (parts[4].replace("-", " ")).toUpperCase();
        setBreed(breedName);
      })
      // mikäli kuvaa ei esim.löydy
      .catch(e => console.log(e.message));
  }

  // haetaan random kuva, kun komponentti ladataan
  useEffect(() => {
    console.log('*******');
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

// funktiokomponentti randomisti haetun kuvan näyttämiseksi
const RandomImageView = ({ randomImg, breed }) => {
  return (
    <>
      <div className='dog-image-container'>
        {/* ehdollinen renderöinti, lukee Loading..kunnes kuva haettu*/}
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

// Buttonkomponentti, uuden kuvan valitsemiseksi
const RandomImageButton = ({ title, handleClick }) => {
  return (
    <button className='random-img-button' onClick={handleClick}>{title}</button>
  );
}
