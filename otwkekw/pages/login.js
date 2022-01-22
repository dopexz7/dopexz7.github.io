import React, {  useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import AuthProvider, { useAuth } from '../comps/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const router = useRouter();
    const { currentUser } = useAuth();
    if (currentUser) {
      router.push('/dashboard')
    }
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            router.push('/dashboard')
        } catch {
            setError('Failed to sign in!')
        }

        setLoading(false)
    
        
    }
  return (
      <>
      <AuthProvider>

      
        <Head>
        <title>Login</title>
        </Head>
      <div className="main-container">
      <Card>
          <Card.Body>
              <h2 className='text-center mb-4'>Log in</h2>
            {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              
              <Button disabled={loading} className='w-100 mt-3' type="submit">
                  Log in
              </Button>
          </Form>
          <div className='card-forgotetc w-100 text-center mt-2'>
              <Link href="/forgot-password"><a>Forgot password?</a></Link>
          </div>
          </Card.Body>
      </Card>
      <div className='card-forgotetc w-100 text-center mt-2'>
          Need an account? <Link href="/signup"><a>Sign up</a></Link>
      </div>
      </div>
      </AuthProvider>
      </>
  )

  
}
