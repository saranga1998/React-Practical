import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';


Modal.setAppElement('#root')
function PreModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
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

export default PreModal
