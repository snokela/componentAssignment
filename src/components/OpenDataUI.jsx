import { useEffect, useState } from 'react';
import '../styles/OpenDataUI.css';
import Header from './Header';
import headerImg from '../assets/secondHeaderImg.png';
import axios from 'axios';



// api-osoite
const baseURL = 'https://dog.ceo/api/breeds/image/random'

function OpenDataUI() {

  const [randomImg, setRandomImg] = useState('');

  // funktio joka noutaa randomin kuvan rajapinnasta
  const fetchRandomImage = () => {
    axios.get(baseURL)
      .then(resp => {
        // randomisti haetun kuvan url
        const randomImgURL = resp.data.message
        setRandomImg(resp.data.message);
      })
      .catch(e => console.log(e.message));
  }

  // haetaan random kuva, kun komponentti ladataan
  useEffect(() => {
    fetchRandomImage()
  }, []);

  return (
    <div className='open-data-content'>
      <Header
        image={headerImg}
        title={'Discover a Random Dog Image!'}
      />
      <RandomImageView
        randomImg={randomImg}
      />
      <RandomImageButton
        title={'Get random image'}
        handleClick={fetchRandomImage}
      />
    </div>
  );
}

export default OpenDataUI;

// funktiokomponentti, joka näyttää randomin kuvan
function RandomImageView({ randomImg }) {
  return (
    <div className='dog-image-container'>
      {/* ehdollinen renderöinti, lukee Loading..kunnes kuva haettu*/}
      {randomImg ? (
        <img src={randomImg} alt='Random dog' className='random-dog-img' />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// Buttonkomponentti
function RandomImageButton({ title, handleClick }) {
  return (
    <button className='random-img-button' onClick={handleClick}>{title}</button>
  );
}
