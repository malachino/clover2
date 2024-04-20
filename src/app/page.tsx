import Image from "next/image";
import React from 'react';
import './globals.css';
import cookie from './images/cookie.png'
import controller from './images/controller.png'
import headphones from './images/headphones.png'

function App() {

  return (
      <body>

        <nav className='TopBar'>
            <ul>
                <li><a href='http://localhost:3000/'>C L O V E R</a></li>
                <li><a href='http://localhost:3000/'>Home</a></li>
                <li><a href='http://localhost:3000/'>Extras</a></li>
                <li><a href='http://localhost:3000/'>About</a></li>
                <li><a href='http://localhost:3000/'>Contact</a></li>
                <li><a href='https://www.google.com/'>Leave to Google</a></li>
            </ul>
        </nav>

        <main>
            <h2>Hello!</h2>
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
      </body>
  );
}

export default App;
