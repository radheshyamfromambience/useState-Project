// Home.jsx
import "./home.css";
 // apna logo yahan rakho
 import {Link} from 'react-router-dom'

function Home() {

  const projects = [
    {
      title: "Counter App",
      desc: "Increase, Decrease & Reset using useState",
      level: "Beginner",
      chapter: "React/useState",
      path: "/project1",
    },
    {
      title: "Todo List",
      desc: "Add & Delete tasks using array state",
      level: "Beginner",
      chapter: "React/useState",
      path: "/project2",
    },
    {
      title: "Password Toggle",
      desc: "Show & Hide password feature",
      level: "Beginner",
      chapter: "React/useState",
      path: "/project3",
    },
    {
      title: "Dark / Light Mode",
      desc: "Theme switcher using boolean state",
      level: "Intermediate",
      chapter: "React/useState",
      path: "/project4",
    },
    {
      title: "Login Form",
      desc: "Form handling with useState",
      level: "Intermediate",
      chapter: "React/useState",
      path: "/project5",
    },
    {
      title: "FAQ Accordion",
      desc: "Open / Close questions using state",
      level: "Intermediate",
      chapter: "React/useState",
      path: "/project6",
    }
  ];

  return (
    <div className="ambience-home">
      
      {/* ===== HEADER ===== */}
      <header className="ambience-header">
        <img src="https://ambiencecomputereducation.com/img/ambience_computer_education.webp" alt="Ambience Computer Education" />
        <h1>Ambience Computer Education</h1>
        <p>Ambience Practice Project Storeroom</p>
      </header>

      {/* ===== PROJECT CARDS ===== */}
      <section className="project-section">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            
            <div className="card-top">
              <span className="level">{item.level}</span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p style={{color:"green", marginTop:"10px"}}>{item.chapter}</p>
            <button className="view-btn">
                <Link to={item.path} className="view-btn">
              View Project →
              </Link>
            </button>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Home;
