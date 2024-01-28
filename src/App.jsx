import './App.css';
import { CiMenuBurger } from 'react-icons/ci';
import { FiArrowRight } from "react-icons/fi";

export default function App() {
  return (
    <>
      <nav>
        <div className="top-nav">
          <div>Mock</div>
          <div>Mock</div>
          <div>Mock</div>
          <div>Mock</div>
        </div>

        <div className="bottom-nav">
          <h1>Asi</h1>
          <div className="bottom-right-nav">
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <div>Mock</div>
            <button className="view-demo-btn">Mock Button</button>
            <button className="get-access-btn">Mock Button</button>
          </div>
          <CiMenuBurger className="ci-menu-burger" size="2rem" />
        </div>
      </nav>

      <main>
        <div>
          <h2>
           This is a mock website made by Andres Flores as a Resume Project. I used React, Javascript, HTML, and CSS for this project.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            deserunt facere, ex nobis fugit quia odit amet voluptas voluptatum!
            Doloribus!
          </p>
          <button className="join-now-btn">Mock Button</button>
        </div>
        <div className='main-right-wrapper'>
          <div className='upcoming-events-btn'>
            Mock Button
            <FiArrowRight size="1.5rem"/>
          </div>
        </div>
      </main>
    </>
  );
}
