import { useState } from 'react';
import '../styles/OpenDataUI.css';


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

  return (
    <div className='open-data-content'>
       <img src={randomImg} alt='Random dog' className='random-dog-img' />
    </div>
  );
}

export default OpenDataUI;