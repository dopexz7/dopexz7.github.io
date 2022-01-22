import Head from 'next/head';
import Image from 'next/image';
import Topnav from './Home/topnav';
import HeaderContent from './Home/headercontent';
import ThisWeeksArt from './Home/thisweekart';
import AuthProvider from '../comps/AuthContext';



export default function Home() {
  return (
    <AuthProvider>
    <div>
    <div className='main-header'>
      <div className='main-container'>
         <Topnav />
        <HeaderContent />
      </div>
    </div>
    <div className='main-container'>
      <ThisWeeksArt />
    </div>
  </div> 
  </AuthProvider>
  )
}
