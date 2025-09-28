import Buy from "../Buy/Buy";
import Extra from "../Extra/Extra";
import Featured from "../Featured/Featured";
import Sliders from "../Sliders/Sliders";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <Featured></Featured>
      <Trending></Trending>
      <Extra></Extra>
      <Buy></Buy>
    </div>
  );
};

export default Home;
