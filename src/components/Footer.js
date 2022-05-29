import './Footer.css';

export const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='contactList'>
                <i className="fa fa-github" style={{fontSize: '26px'}}></i>
                <i className="fa fa-instagram" style={{fontSize: '26px'}}></i>
                <i className="fa fa-linkedin" style={{fontSize: '26px'}}></i>
                <i className="fa fa-twitter" style={{fontSize: '26px'}}></i>
                <i className="fa fa-telegram" style={{fontSize: '26px'}}></i>
                <div className='verticalLine'></div>
            </div>
            <div className='footerRemark'>
                <p> Designed by <span className='linkText'> Brittany Chiang </span> and Built by <span className='linkText'> Dagmawi Babi </span> </p>
                <p> May, 2022 </p>
            </div>                    
            <div className='email'>
                <p> 1babidagi@gmail.com </p>
                <div className='verticalLine moveRight'></div>
            </div>
        </div>
    );
}