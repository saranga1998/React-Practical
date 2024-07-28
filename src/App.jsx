import './App.css'
import Countup from './Components/Countup';
import PreTooltip from './Components/PreTooltip';
import PreModal from './Components/PreModal';
import Notifi from './Components/Notifi';
import IdleTimerContainer from './Components/IdleTimerContainer';
import ColorPiker from './Components/ColorPiker';
import CreditCard from './Components/CreditCard';
import DatePicker from './Components/DatePickerA';
import Player from './Components/Player';
import Spinner from './Components/Spinner';



function App() {



  return (
    <div>
      <Notifi />
      <PreModal />
      <PreTooltip />
      <Countup />
      {/* <IdleTimerContainer></IdleTimerContainer> */}
      <ColorPiker />
      <CreditCard />
      <DatePicker />
      <div className='.youtubeplayer'>
        <Player />
      </div>
      <br/>
      <div className='spinner'>
        <Spinner />
      </div>
    </div>
  )
}

export default App
