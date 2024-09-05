import headerImg from './assets/headerImg.png';
import Header from './components/Header';
import SelectProduct from './components/SelectProduct';


function App() {
return (
    <div>
      <Header image={headerImg} title={'Welcome to product page!'}/>
      <SelectProduct />
    </div>
  );
}

export default App;

