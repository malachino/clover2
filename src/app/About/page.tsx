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
            <h1>About</h1>
            
            <p>
            My name is Malachi. I like making stuff, from music to games to cookies.          <br></br>
            Incidentally, I also like listening to music, playing games, and eating cookies.  <br></br>
            
                <Image className="img"
                    src="/images/headphones.png"
                    width={80}
                    height={80}
                    alt="headphones"
                />  

                <Image className="img"
                    src="/images/cookie.png"
                    width={80}
                    height={80}
                    alt="cookie"
                    />

                <Image className="img"
                    src="/images/controller.png"
                    width={80}
                    height={80}
                    alt="controller"
                    />
            </p>
        </main>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      </body>
  );
}

export default App;
