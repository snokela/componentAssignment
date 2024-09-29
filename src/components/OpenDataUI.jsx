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
    </div>
  );
}

export default OpenDataUI;

// funktio, joka näyttää randomin kuvan
function RandomImageView({ randomImg }) {
  return (
      <div className='dog-image-container'>
          <img src={randomImg} alt='Random dog' className='random-dog-img' />
      </div>
  );
}