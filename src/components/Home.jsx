import { Typewriter } from 'react-simple-typewriter';
import '../App.css';

import Experiences from './experiences/Experiences';
import VerticalNav from './VerticalNav';
import Projects from './projects/Projects';
import HomeResearch from './HomeResearch';

function Home() {
  return (
    <>
      <VerticalNav />
      
      <div className="main-content" >
        <div className="introContainer" id="home">

          <div className="sec1">
            <p className="name">Xiang (Amelia) Li</p>
            <p className="tagline">CS + Info @ University of Washington</p>
          </div>
          <br></br>
          <br></br>
          <div className="sec2">
            <h1>
              Hi! 👋 I'm Amelia, <br></br> {' '}
              <span
                className="typing-span"
                style={{ color: 'var(--accent-lavender)', fontWeight: 'bold' }}
              >
                <Typewriter
                  words={['a developer', 'a CS + INFO student', 'an organized planner', 'a community builder', 'a boba + coffee enthusiast']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="intro">
              🎓 I'm a third-year CS and Informatics student at the University of Washington with a love for building thoughtful, user-centered tech. 
              I'm a builder of everything from practical tools to wonderfully questionable side projects, and I thrive at the intersection of software engineering and product thinking. 
            </p>
            <p>
              💡 Outside of code, you'll probably catch me rewatching <i>Hamilton</i> or <i>SIX</i>, and I firmly believe they make the best background music for working and debugging.
            </p>
            <br></br>
            <i
              style={{
                fontSize: '15px',
                color: 'var(--text-muted)',
                display: 'block',
                textAlign: 'left',
                marginLeft: '30px',
              }}
            >
             💾 Databases • ⚙️ Full-Stack • 💭 Product Thinking • 🧋 Boba Dev Hours
            </i>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        
        <section id="experiences">
          <Experiences />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <section id="research">
          <HomeResearch />
        </section>

        <br></br>
        <br></br>
        <br></br>

        <section id="projects">
          <Projects />
        </section>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <footer
          style={{
            textAlign: 'center',
            padding: '10px',
            fontSize: '14px',
            color: 'var(--text-muted)',
          }}
        >
          <p>© 2026 Amelia Li</p>
        </footer>
      </div>
    </>
  )
}

export default Home
