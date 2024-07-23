import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Modal from 'react-modal';
import { useState } from 'react';

const CustomToast = (closeToast) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>close</button>
    </div>
  );
}
Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const notify = () => {
    toast.info('Hello user', { position: "top-center" })
    toast.info(<CustomToast />, { position: "bottom-left" })
  }
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />

      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <h2>Modal Head</h2>
          <p>Modal Body</p>
          <div>
            <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
          </div>
        </Modal>

      </div>
    </div>
  )
}

export default App
