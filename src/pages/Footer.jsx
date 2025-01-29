import React from 'react';

const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-2"><strong>Promo Codes</strong></div>
                    <div className="col-md-2"><strong>Betting Sites</strong><br />Esports<br />Football<br />Tennis</div>
                    <div className="col-md-2"><strong>Poker</strong></div>
                    <div className="col-md-2"><strong>Casinos</strong><br />Live Dealer<br />Blackjack<br />Baccarat</div>
                    <div className="col-md-2"><strong>Currencies</strong><br />Bitcoin<br />Ethereum<br />Litecoin</div>
                </div>
                <hr className="bg-light" />
                <div className="row text-center">
                    <div className="col-12">
                        <a href="#">Terms and Conditions</a> |
                        <a href="#">Privacy Policy</a> |
                        <a href="#">Cookie Policy</a> |
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <p className="mt-3">
                    Crypto Ninjas &reg; is a registered trademark. Copyright &copy; 2025. 
                    Reproduction in whole or in part without express written permission is prohibited. 
                    Players must be 18 or over. Please play responsibly. 
                    If you or someone you know has a gambling problem, seek help.
                </p>
              
            </div>
        </footer>
    );
};

export default Footer;
