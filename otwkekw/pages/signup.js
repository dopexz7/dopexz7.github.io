import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import AuthProvider, { useAuth } from '../comps/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const router = useRouter();
    const { currentUser } = useAuth();
    if (currentUser) {
      router.push('/dashboard')
    }
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();
    

    async function HandleSubmit(e) {
        
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match!')
        }
        try {
            setError('');
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            router.push('/dashboard')
        } catch {
            setError('Failed to create an account!')
        }

        setLoading(false)
    
        
    }
  return (
      <>
      <AuthProvider>

      
      <div className="main-container">
      <Card>
          <Card.Body>
              <h2 className='text-center mb-4'>Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={HandleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className='w-100 mt-3' type="submit">Sign up</Button>
          </Form>
          </Card.Body>
      </Card>
      <div className='card-forgotetc w-100 text-center mt-2'>
          Already have an account? <Link href="/login">Login</Link>
      </div>
      </div>
      </AuthProvider>
      </>
  )

  
}
