import Meet from "./components/Meet/Meet";
import MeetDescription from "./components/MeetDescription/MeetDescription";
import GetBtn from "./components/GetBtn/GetBtn";
import FollowUs from "./components/FollowUs/FollowUs";
import TwitterLogo from "./components/TwitterLogo/TwitterLogo";
// import './App.css';

function App() {
  return(
  <>
  <Meet/>
  <MeetDescription/>
  <GetBtn/>
  <FollowUs img = {TwitterLogo}/>
  </>
  )
}

export default App;
