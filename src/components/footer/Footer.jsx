import facebook from '../../assets/facebook-app-round-white-icon 2.png'
import Twitter from '../../assets/Twitter_Logo_WhiteOnImage 2.png'
import youtube from '../../assets/youtube-app-white-icon 2.png'
import instagram from '../../assets/instagram-white-icon 2.png'
import linkedin from '../../assets/linkedin-icon-2048x2048-yx2cmt11 2.png'
import s from './footer.module.scss'
export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={facebook} alt="ícone de facebook" /></a>
                    <a href=""><img src={Twitter} alt="ícone de twitter" /></a>
                    <a href=""><img src={youtube} alt="ícone de youtube" /></a>
                    <a href=""><img src={linkedin} alt="ícone de linkedin" /></a>
                    <a href=""><img src={instagram} alt="ícone de instagram" /></a>
                </nav>
            </section>
            <section className={s.copy}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}