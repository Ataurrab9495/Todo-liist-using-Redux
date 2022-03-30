import React, { useEffect, useState } from 'react'
import { addToDo, removeToDo,updateToDo } from '../services/Action/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { Card, InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'

const TodoList = () => {
    const [inputData, setInputData] = useState('');
    const [editable, setEditable] = useState(false);
    const [updateValue, setUpdateValue] = useState('');
  
    const dispatch = useDispatch();

    
    const list =useSelector((state) => state.addToDoData.todos)
    
    
    useEffect(()=>{
        if(list){
            console.log("yes , i am accessible")
        }
    }, [list])


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
                                            {editable ? <FormControl
                                                placeholder="update ToDo..."
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                value={updateValue}
                                                onChange={(event)=> {
                                                    console.log(event.target.value)
                                                    setUpdateValue(event.target.value)
                                                    console.log(updateValue)
                                                }}
                                            /> : <h6>{item.data}</h6>}

                                        </Col>
                                        <Col xs={6}>
                                            <div className='d-flex justify-content-end'>
                                                
                                                    <Button 
                                                        onClick={()=>{
                                                            dispatch(updateToDo(updateValue));
                                                            setEditable(!editable);
                                                        }}
                                                    variant="primary" id="button-addon2" className='me-2'>
                                                    {editable ? "Update" : "Edit"}
                                                </Button>
                                                <Button variant="primary" id="button-addon2" onClick={() => dispatch(removeToDo(item.id))}>
                                                    del
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
        </div>
    )
}

export default TodoList