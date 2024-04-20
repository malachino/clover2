'use client'
import Image from "next/image";
import React from 'react';

import { useRouter } from 'next/navigation'

import '../globals.css';
import cookie from './images/cookie.png'
import controller from './images/controller.png'
import headphones from './images/headphones.png'

function App() {
  const router = useRouter()
  return (
      <body>

        <nav className='TopBar'>
            <ul>
                <li><a><button type="button" onClick={() => router.push('/Home'           )}> C L O V E R   </button></a></li>
                <li><a><button type="button" onClick={() => router.push('/Home'           )}> Home          </button></a></li>
                <li><a><button type="button" onClick={() => router.push('/Things_To_Read' )}> Things to Read</button></a></li>
                <li><a><button type="button" onClick={() => router.push('/Extras'         )}> Extras        </button></a></li>
                <li><a><button type="button" onClick={() => router.push('/About'          )}> About         </button></a></li>
                <li><a><button type="button" onClick={() => router.push('/Contact_Me'     )}> Contact Me    </button></a></li>
            </ul>
        </nav>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <main>
            <h1>Home</h1>
            <p>
                Welcome to Clover version 1.1!      <br></br>
            </p>
            <pre>
                Changes from 1.0 include:                 <br></br>
                -Switched to light theme                  <br></br>
                -Added Things to Read section             <br></br>
                -Cleaned up the navigation bar            <br></br>
                -Added functionality for multiple pages   <br></br>
                -Filled content into each page            <br></br>
                -Implemented keyboard support             <br></br>
            </pre>
        </main>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      </body>
  );
}

export default App;
