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
        setlivros(resposta.data)
        
    }
    console.log(livros)

    useEffect(()=>{
        puxarLivros()
    },[])
    
    return(
        < section className = {s.livrosDoados}>
           <h2>Livros Doados</h2>
           
           <section className={s.livrosCards}>
           {livros.map((item) => (
                    <section>
                        <img src={item.image_url} alt={`Imagem do livro ${item.titulo}`} />
                        <div>
                            <h3>{item.titulo}</h3>
                        </div>
                    </section>
                ))}
           </section>
           
           
        </section>
        
    )
}