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
                <h1>Things to Read</h1>
                <pre>
                    <a href='https://www.youtube.com/@3blue1brown'>3Blue1Brown</a> <br></br>
                    <a href='https://www.youtube.com/@HistoriaCivilis'>Historia Civilis</a> <br></br>
                    <a href='https://www.youtube.com/@Vsauce'>Vsauce</a> <br></br>
                    <a href='https://www.youtube.com/@Pomplamoose'>Pomplamoose</a> <br></br>
                    <a href='https://www.youtube.com/@shadowatnoon'>shadowatnoon</a> <br></br>
                    <a href='https://www.youtube.com/@ScaryPockets'>Scary Pockets</a> <br></br>
                    <a href='https://www.youtube.com/@jayskullz'>jay skullz</a> <br></br>
                    <a href='https://www.youtube.com/@vlogbrothers'>vlogbrothers</a> <br></br>
                    <a href='https://www.youtube.com/@AlvinKZhou'>Alvin Zhou</a> <br></br>
                    <a href='https://www.youtube.com/@FrugalAesthetic'>Frugal Aesthetic</a> <br></br>
                    
                </pre>
            </main>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      </body>
  );
}

export default App;