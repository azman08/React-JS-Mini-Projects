import women1 from "./assets/women1.jpg";
import women2 from "./assets/women2.jpg";
import women3 from "./assets/women3.jpg";
import women4 from "./assets/women4.jpg";
import AdvancedSlider from "./components/AdvancedSlider";

const App = () => {
  const images = [women1, women2, women3, women4];
  return (
    <div>
      <AdvancedSlider images={images} />
    </div>
  );
};

export default App;
