import './App.css'
import Countup from './Components/Countup';
import PreTooltip from './Components/PreTooltip';
import PreModal from './Components/PreModal';
import Notifi from './Components/Notifi';
import IdleTimerContainer from './Components/IdleTimerContainer';
import ColorPiker from './Components/ColorPiker';
import CreditCard from './Components/CreditCard';



function App() {



  return (
    <div>
      <Notifi />
      <PreModal />
      <PreTooltip />
      <Countup />
      {/* <IdleTimerContainer></IdleTimerContainer> */}
      <ColorPiker/>
      <CreditCard/>
    </div>
  )
}

export default App
