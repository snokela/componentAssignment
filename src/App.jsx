import headerImg from './assets/headerImg.png';
import Header from './components/Header';

function App() {
return (
    <div>
      <Header image={headerImg} title={'Welcome to product page!'}/>
    </div>
  );
}

export default App;

