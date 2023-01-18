import './Empresaslogo.css'

const Empresaslogo = ({img, img2, img3, img4, img5}) => {
    return(
        <div className="empresaslogo">
           <img src={img}></img>
           <img src={img2}></img>
           <img src={img3}></img>
           <img src={img4}></img>
           <img src={img5}></img>
        </div>
    )
}

export default Empresaslogo;