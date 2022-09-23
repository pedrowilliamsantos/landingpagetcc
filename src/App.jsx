import './App.css';
import Intro from './components/Intro/Intro';
import Features from './components/Features/Features';
import Explore from './components/Explore/Explore';
import Description from './components/Description/Description';
import Prints from './components/Prints/Prints';
import Download from './components/Download/Download';

const App = () => {

  return (
    <>
      <Intro></Intro>
      <Features></Features>
      <Explore></Explore>
      <Description></Description>
      <Prints></Prints>
      <Download></Download>
    </>
  );
}

export default App;
