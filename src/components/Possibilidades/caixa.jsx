import img from '../../assets/possibility.png';
import './caixa.css';

const Caixa = () => {

    return(
        <div className="caixa">
            <div className="div-img">
              <img src={img} alt="" />
            </div>
            <div className="div-text">
                <p>Request Early Access to Get Started</p>
                <h1>The possibilities are<br/>
                beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing.Not<br/>
                thoughts all exercise blessing. Indulgence way everything joy<br/>
                alteration boisterous the attachment. Party we years to order<br/>
                allow asked of.</p>
                <p>Request Early Access to Get Started</p>
            </div>
        </div>
    )
}

export default Caixa;