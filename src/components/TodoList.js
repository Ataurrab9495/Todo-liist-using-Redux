import React, { useState } from 'react'
import { addToDo, removeToDo,updateToDo } from '../services/Action/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, InputGroup, FormControl, Button, Row, Col, Modal,Form } from 'react-bootstrap';


const TodoList = () => {
    const [inputData, setInputData] = useState('');
    const [show, setShow] = useState(false);
    const [updateValue,setUpdateValue] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    const list = useSelector((state) => state.addToDoData.todos)



    return (
        <div>

            <Card>
                <div className='mt-3 mb-3 text-center'>
                    ToDo List
                </div>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add ToDo..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <Button variant="primary" id="button-addon2" onClick={() => dispatch(addToDo(inputData), setInputData(''))}>
                            ADD
                        </Button>
                    </InputGroup>


                    {console.log(list)}

                    {

                        list.map((item) => {

                            return (

                                <div className='mt-3 p-2' style={{ background: '#00c4ff47', borderRadius: '5px' }} key={item.id}>

                                    <Row>
                                        <Col xs={6} className="d-flex align-items-center">
                                            <h6>{item.data}</h6>

                                        </Col>
                                        <Col xs={6}>
                                            <div className='d-flex justify-content-end'>

                                                <Button
                                                    onClick={handleShow}
                                                    variant="primary" id="button-addon2" className='me-2'>
                                                    Edit
                                                </Button>
                                                <Button variant="primary" id="button-addon2" onClick={() => dispatch(removeToDo(item.id))}>
                                                    Del
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            )
                        })

                    }
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="add todo"
                        onChange={(e) => setUpdateValue(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> dispatch(updateToDo(updateValue))}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default TodoList

