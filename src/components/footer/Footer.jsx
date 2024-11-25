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
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={Twitter} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={instagram} alt="" /></a>
                </nav>
            </section>
            <section className={s.copy}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}