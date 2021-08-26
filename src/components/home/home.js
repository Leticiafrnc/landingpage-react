import React from "react";
import './home.css'

function Home() {
  return (
    <div className="HomePage">
      <div className="menu-list">
        <h1>LogoTipo</h1>
      <ul className="menu">
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      </div>
      <header className="HomeHeader">
        <div className="home-banner-text">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie arcu sit amet odio facilisis posuere.<br/>
          Sed elementum enim et sapien ultrices molestie</p>
          <button>Saiba Mais</button>
        </div>
      </header>
    </div>
  );
}

export default Home;