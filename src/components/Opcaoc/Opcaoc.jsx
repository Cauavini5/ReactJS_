import Opcao from '../../containers/Opçoes/Opcao';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Opcaoc = () => {

    return(
        <>
         <Opcao 
         h1={<h1>
            A lot is happening, <br/>
            We are blogging about it.
         </h1>}
         img1={blog01}
         img2={blog02}
         img3={blog03}
         img4={blog04}
         img5={blog05}
         data={<p>Sep 26, 2021</p>}
         texto1={<h2>GPT-3 and Open Ai is the<br/>future. Let us exlore how
         it<br/>is?</h2>}
         texto2={<p>Read Full Article</p>}
         />
        </>
    )
}

export default Opcaoc;