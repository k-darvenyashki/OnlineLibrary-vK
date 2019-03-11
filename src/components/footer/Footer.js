import React from 'react';
import ReactDOM from "react-dom";
class Footer extends React.Component {

    render = () => ReactDOM.createPortal(
        <div className="footer">
            <div className="container d-flex">
                <span>FOOTER</span>
                <span className="ml-auto">2019</span>
            </div>
        </div>,
        document.getElementById("footer")
    )
}
export default Footer;