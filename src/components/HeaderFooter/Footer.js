import './headerfooter.css';

function Footer() {
    return (
        <div className="App">
           <footer className="App-footer">
            <p> {'Copyright © '} website {new Date().getFullYear()} </p>
            </footer>
        </div>
    );
}


export default Footer;
