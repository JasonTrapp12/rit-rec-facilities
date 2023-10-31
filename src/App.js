
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

function App() {

  return (
    <div>
      <h1 className="title">
        RIT Recreational Facilities
      </h1>
      <ImageSlider slides={SliderData}/>;
    </div>
  )
}

export default App;
