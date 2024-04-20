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
                <li><a><button type="button" onClick={() => router.push('/Things_to_Read' )}> Things to Read</button></a></li>
                <li><a><button type="button" onClick={() => router.push('/Extras'         )}> Extras        </button></a></li>
                <li><a><button type="button" onClick={() => router.push('/About'          )}> About         </button></a></li>
                <li><a><button type="button" onClick={() => router.push('/Contact_Me'     )}> Contact Me    </button></a></li>
            </ul>
        </nav>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <main>
            <h1>Contact Me</h1>
        </main>
        <pre>
                Email:       maldbad@outlook.com <br></br>
                {/* LinkedIn:  <a href='https://www.linkedin.com/in/malachi-o/'>linkedin.com/malachi-o</a> */}
        </pre>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      </body>
  );
}

export default App;
