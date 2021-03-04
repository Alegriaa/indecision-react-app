import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    // Modal takes two arguments, second is for accessibility 
        <Modal
        // true boolean to deal with undefined 
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        >

        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );



export default OptionModal;
