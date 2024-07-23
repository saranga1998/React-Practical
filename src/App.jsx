import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const CustomToast = (closeToast) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>close</button>
    </div>
  );
}

function App() {
  
  const notify = () => {
    toast.info('Hello user',{position: "top-center"})
    toast.info(<CustomToast/>,{position : "bottom-left"})
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  )
}

export default App
