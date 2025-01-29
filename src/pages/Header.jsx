import React from 'react';

const Header = () => {
    return (
        <div>
             <header className="header">
        <div className="logo">
            <span>CRYPTO <span className="ninjas">NINJAS</span></span>
        </div>
        <nav className="nav">
            <ul>
                <li>Promo Codes</li>
                <li>Betting Sites</li>
                <li>Poker</li>
                <li>Casinos</li>
                <li>Currencies</li>
            </ul>
        </nav>
        <div className="actions">
            <button className="crypto-betting">Crypto Betting</button>
        </div>
    </header>
    <div className="icons-bar">
        <div className="icon"><span className="badge">1</span> Stake</div>
        <div className="icon"><span className="badge">2</span> 1XBET</div>
        <div className="icon"><span className="badge">3</span> BC.GAME</div>
        <div className="icon"><span className="badge">4</span> Gamdom</div>
        <div className="icon"><span className="badge">5</span> MELBET</div>
        <div className="icon"><span className="badge">6</span> ROOBET</div>
        <div className="icon"><span className="badge">7</span> RollBets</div>
        <div className="icon"><span className="badge">8</span> 3etplay</div>
        <div className="icon"><span className="badge">9</span> RABONA</div>
        <div className="icon"><span className="badge">10</span> 1WIN</div>
        <div className="icon">See all</div>
    </div>
        </div>
    );
};

export default Header;