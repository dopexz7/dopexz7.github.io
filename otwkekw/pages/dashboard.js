import React, { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../comps/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UploadForm from '../components/UploadForm';
// import ImageGrid from '../components/ImageGrid';
// import Modal from '../components/Modal';



export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const router = useRouter();
    if (!currentUser) {
        router.push('/login')
    }
    //const [selectedImg, setSelectedImg] = useState(null);
    
    async function handleLogout() {
        setError('')

        try {
            await logout()
            router.push('/login')
        } catch {
            setError('Failed to log out!')
        }
    }
    return (
    <>
    <Head>
        <title>Dashboard</title>
    </Head>
    <div className="main-container">
    <Card>
        <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser && currentUser.email}
        <Link href="/update-profile" className="btn btn-primary w-100">
            Update profile
        </Link>
        {/* <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
        </Card.Body>
    </Card>
    <div className='card-forgotetc w-100 text-center mt-2'>
        <Button variant="link" onClick={handleLogout}>Log out</Button>
    </div>

      


    </div>
    </>
  );
}
