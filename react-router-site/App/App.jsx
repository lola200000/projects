import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenue !</h1>
      <p>Ceci est la page d’accueil.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>À propos</h1>
      <p>Ce site a été créé pour pratiquer React Router DOM.</p>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h1>Nos services</h1>
      <ul>
        <li>Service 1 : Consultation</li>
        <li>Service 2 : Développement</li>
        <li>Service 3 : Support</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <p>Email : contact@exemple.com</p>
      <p>Téléphone : 01 23 45 67 89</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups, cette page n’existe pas !</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
