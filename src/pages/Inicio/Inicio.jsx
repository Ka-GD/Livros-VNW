import s from './inicio.module.scss'
import comunidade from '../../assets/comunidade.png'
import lendo from '../../assets/lendo.png'
import balançajustiça from '../../assets/balançajustiça.png'
import luta from '../../assets/luta.png'
export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <section className={s.cardsMotivos}>
                    <section>
                        <img src={comunidade} alt="imagem de icones de pessoas em circulo com fundo azul e desenho preto" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={lendo} alt="imagem de um icone lendo livro com fundo azul e desenho preto" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={luta} alt="imagem de icones de pessoas com fundo azul e desenho preto" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={balançajustiça} alt="imagem de balaça com fundo azul e desenho preto" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </section>
            </section>
        </main>
           
    )
}