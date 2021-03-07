import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    // Modal takes two arguments, second is for accessibility 
        <Modal
        // true boolean to deal with undefined 
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        // delay for modal to dissappear
        closeTimeoutMS={200}
        className="modal"
        >

        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );



export default OptionModal;
