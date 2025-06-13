import LogoImg from '../assets/logo.png';
import '../css/Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo__inicio" src={LogoImg} alt="Logo" />
        </div>
    );
};

export default Logo;
