import Empresaslogo from "../../containers/Empresaslogo/Empresaslogo";
import atlassian from '../../assets/atlassian.png';
import google from '../../assets/google.png';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';
import dropbox from '../../assets/dropbox.png';

import './EmpresaslogoCSS2.css';

const Empresaslogoc = () => {

    return (
        <> 
         <Empresaslogo className="empresaslogo"
           img={google}
           img2={slack}
           img3={atlassian}
           img4={dropbox}
           img5={shopify}
         />
        </>
    )
}

export default Empresaslogoc;