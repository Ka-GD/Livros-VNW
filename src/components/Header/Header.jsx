// Importar componentes
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import livro from '../../assets/livro.png'; 
import lupa from '../../assets/lupa.png';    
import Inicio from '../../pages/Inicio/Inicio'; 
import LivrosDoados from'../../pages/LivrosDoados/LivrosDoados';
import QueroDoar from '../../pages/QueroDoar/QueroDoar';
import s from './header.module.scss'

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoHeader}>
          <img src={livro} alt="Logo Livros Vai na Web" />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav className={s.navHeader}>
          <ul>
            <li><Link className={s.link} to="/">Início</Link></li>
            <li><Link className={s.link} to="/LivrosDoados">Livros Doados</Link></li>
            <li><Link className={s.link}to="/QueroDoar">Quero Doar</Link></li>
          </ul>
        </nav>

        <section className={s.barraPesquisa}>
          <input type="search" id="search" name="search" placeholder="O que você procura?" />
          <button>
            <img src={lupa} alt="Ícone de busca" />
          </button>
        </section>
      </header>
      
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/LivrosDoados" element={<LivrosDoados />} />
          <Route path="/QueroDoar" element={<QueroDoar />} />
        </Routes>
    </BrowserRouter>
  );
}
