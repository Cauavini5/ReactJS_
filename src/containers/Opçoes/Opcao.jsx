import './Opcao.css';

const Opcao = ({h1, img1, img2, img3, img4, img5, data, texto1, texto2}) => {

    return(
        <div className="containerItems">
            {h1}
            <article className="items">
                <div className="div1">
                  <img src={img1} alt="" />
                  {data}
                  {texto1}
                  {texto2}
                </div>
                
                <div className="div2">
                  <img src={img2} alt="" />
                  {data}
                  {texto1}
                  {texto2}
                </div>
                <div className="div3">
                  <img src={img3} alt="" />
                  {data}
                  {texto1}
                  {texto2}
                </div>

                <div className="div4">
                  <img src={img4} alt="" />
                  {data}
                  {texto1}
                  {texto2}
                </div>

                <div className="div5">
                <img src={img5} alt="" />
                  {data}
                  {texto1}
                  {texto2}
                </div>
            </article>
        </div>
    )
}

export default Opcao;