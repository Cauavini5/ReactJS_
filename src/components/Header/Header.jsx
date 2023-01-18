import './Header.css'

const Header = ({aipng, people}) => {
    return(
        <div className="containerInicio1">
          <div className="div-text">
            <h1>Let's Build Something<br/>
            amazing with GPT-3<br/>
            OpenAI</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.<br/> 
            Not thoughts all exercise blessing. Indulgence way<br/> 
            everything joy alteration boisterous the attachment. Party<br/> 
            we years to order allow asked of.</p>
            <input type="text" placeholder="Your Email Adreess"></input>
            <button>Get Started</button>
            <img src={people} alt="people"></img> <p id="p-div-text">1,600 people requested access a visit in last 24 hours</p>
          </div>

          <div className="div-img">
            <img src={aipng} alt="ai"></img>
          </div>

        </div>
    )
}

export default Header;