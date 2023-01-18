import './Navbar.css';
import Menuclick from './Menuclick';

const Navbar = () => {

    return(
        <header>
            <div className="items1">
              <h2>GPT-3</h2>
              <p>Home</p>
              <p>What is GPT?</p>
              <p>Open AI</p>
              <p>Case Studies</p>
              <p>Library</p>
            </div>

            <div className="items2">
              <p>Sign in</p>
              <p>Sign up</p>
              <i onClick={Menuclick} className="fa-solid fa-bars"></i>
            </div>
            <div id="menu">
              <p className="p-menu">Home</p>
              <p className="p-menu">What is GPT?</p>
              <p className="p-menu">Open AI</p>
              <p className="p-menu">Case Studies</p>
              <p className="p-menu">Library</p>
              <p className="p-menu">Sign in</p>
              <p className="p-menu">Sign up</p>
            </div>
        </header>
    )
}

export default Navbar;