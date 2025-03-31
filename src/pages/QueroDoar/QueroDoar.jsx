import axios from 'axios';
import formlivro from '../../assets/formlivro.png';
import s from './QueroDoar.module.scss';
import { useState } from 'react';

export default function QueroDoar() {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [image_url, setImage_url] = useState("");

    const capturaTitulo = (e) => {
        setTitulo(e.target.value);
    };

    const capturaCategoria = (e) => {
        setCategoria(e.target.value);
    };

    const capturaAutor = (e) => {
        setAutor(e.target.value);
    };

    const capturaImg = (e) => {
        setImage_url(e.target.value);
    };

    const envioDados = async () => {
        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        };

        await axios.post("https://api-hgmm.onrender.com/doar", dadosParaEnviar);
        alert("Obrigado, seu livro foi cadastrado com sucesso");
    };

    return (
        <section className={s.QueroDoar}>
            <p>Por favor, preencha o formulário com suas informações e as informações do livro.</p>

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <img src={formlivro} alt="Imagem com ícone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>

                <input type="text" placeholder="Título" onChange={capturaTitulo} required />
                <input type="text" placeholder="Categoria" onChange={capturaCategoria} required />
                <input type="text" placeholder="Autor" onChange={capturaAutor} required />
                <input type="url" placeholder="Link da Imagem" onChange={capturaImg} required />
                <input type="submit" value="Doar" className={s.botão} onClick={envioDados} />
            </form>
        </section>
    );
}
