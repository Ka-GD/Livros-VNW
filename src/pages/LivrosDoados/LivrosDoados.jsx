import protagonista from '../../assets/protagonista.png'
import s from './LivrosDoados.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.livrosDoados}>
           <h2>Livros Doados</h2>
           {/*inicio da sessao dos livros */}
           <section className={s.livrosCards}>
            <section>
                <img src={protagonista} alt="" />
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

