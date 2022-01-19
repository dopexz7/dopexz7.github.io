import React, { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import UploadForm from '../components/UploadForm';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';



export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const [selectedImg, setSelectedImg] = useState(null);

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/dashboard')
        } catch {
            setError('Failed to log out!')
        }
    }
    return (
    <>
    <Card>
        <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100">
            Update profile
        </Link>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        <Button variant="link" onClick={handleLogout}>Log out</Button>
    </div>
    </>
  );
}
