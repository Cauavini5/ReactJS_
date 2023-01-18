import './Footer.css';

const Footer = () => {

    return(
        <footer>
         <div className="home">
            <h1>Do you want to step in to the<br/>
            future before others</h1>
            <button>Request Early Access</button>
           </div>

           <div className="items">
            <div className="div1">
                <h2>GPT-3</h2>
                <p>Crechterwoord K12 182 DK<br/>
                Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="div2">
                <h5>Links</h5>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="div3">
                <h5>Company</h5>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="div4">
                <h5>Get in touch</h5>
                <p>Crechterwoord K12<br/>
                182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>
           </div>
           <p className="rights">2021-GPT-3. All rights resrved.</p>
        </footer>
    )
}

export default Footer;