import formlivro from '../../assets/formlivro.png'
import s from './QueroDoar.module.scss'
export default function QueroDoar(){
    return(
        <section className={s.QueroDoar}>
           <p>Por favor,preencha o formulário com suas informações e as informações do livro.</p>

           <form action="">

                <div>
                    <img src={formlivro} alt="imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
            
                </div>

                <input type="text" name="" id="" placeholder='Titulo' />
                <input type="text" name="" id="" placeholder='Categoria' />
                <input type="text" name="" id="" placeholder='Autor' />
                <input type="text" name="" id="" placeholder='Link da Imagem' />
                <input type="submit" value="Doar" className={s.botão} />

           </form>
        </section>
    )
}