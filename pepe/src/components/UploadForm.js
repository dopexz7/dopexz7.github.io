import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import ProgressBar from '../components/ProgressBar';



const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    


    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Select image file (.png or .jpg)')
        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className='output'>
                { error && <Alert variant="danger">{ error }</Alert>}
                
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;