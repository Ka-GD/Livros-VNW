import protagonista from '../../assets/protagonista.png'
import s from './LivrosDoados.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


export default function LivrosDoados(){
    
    // variavel array pra guardar as informaçãoes 

    const [livros,setlivros]= useState([])

    const puxarLivros = async()=> {
        const resposta = await axios.get("https://api-hgmm.onrender.com/livroscadastrados")
        setlivros(resposta.data.livros)
        console.log(livros)
    }
    useEffect(()=>{
        puxarLivros()
    },[])
    
    return(
        <section className={s.livrosDoados}>
           <h2>Livros Doados</h2>
           {/*inicio da sessao dos livros */}
           <section className={s.livrosCards}>
            <section>
                <img src={protagonista} alt="imagem de livro o protagonista com capa vermelha e letras brancas" />
                <div>
                    <h3>O protagonista</h3>
                    <p>Susane Andrade</p>
                    <p>Ficção</p>  
                </div>
        
            </section>
           </section>
           {/*fim da sessão dos livros */}
            
           
        </section>
        
    )
}