import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'; 
import Inicio from './pages/Inicio/Inicio'; 
import LivrosDoados from'./pages/LivrosDoados/LivrosDoados';
import QueroDoar from './pages/QueroDoar/QueroDoar';
import './globalStyle/globalStyle.scss' //importando o estilo global


export default function App() {
  return (
    
      <Header />
    
    
  );
}