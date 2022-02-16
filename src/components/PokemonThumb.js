import React, { useState } from 'react';
import { Modal, ProgressBar, Button } from 'react-bootstrap';

const PokemonThumb = ({id, image, name, type, stat, stat1, stat2, stat3, stat4, stat5, _callback }) => {
    const style = type + " thumb-container";
    const [show, setShow] = useState(false);
    const handleClose = () => {
        return setShow(false);
    };
    const handleShow = () => {
        return setShow(true);
    };
  
    return (
        <div className={style} onClick={handleShow}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Pokemon Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className={style}>
                    <img src={image} alt={name} />
                    <div className="detail-wrapper">
                        <h3>{name}</h3>
                        <small className="title-stat">Type: <strong>{type}</strong></small>
                        <small className="title-stat">HP           : <strong>{stat}</strong></small>
                        <ProgressBar now={stat} />
                        <small className="title-stat">Attack       : <strong>{stat1}</strong></small>
                        <ProgressBar now={stat1} />
                        <small className="title-stat">Defence      : <strong>{stat2}</strong></small> 
                        <ProgressBar now={stat2} />                       
                        <small className="title-stat">Special Atk  : <strong>{stat3}</strong></small>
                        <ProgressBar now={stat3} />
                        <small className="title-stat">Special Def  : <strong>{stat4}</strong></small>
                        <ProgressBar now={stat4} />
                        <small className="title-stat">Speed        : <strong>{stat}</strong></small>
                        <ProgressBar now={stat5} />

                        

                    </div>
                    
                </div>
                </Modal.Body>
                <Modal.Footer>
                    
                <small className="title-stat">*press esc also work ;)</small>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default PokemonThumb
