
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import Footer from './pages/Footer';
import Header from './pages/Header';

function App() {


  return (
    <>
      <div>
        <Header></Header>
        {/* <ul>
          <li><a href="/" ></a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/home">home</a></li>
          
          <Link to={'/about'} > About us </Link>
        </ul> */}

<div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <Carousel indicators={true} controls={true} interval={3000} className="custom-slider">
                        <Carousel.Item>
                            <div className="slider-item text-white text-center p-5">
                                <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>LoL Worlds 2024</h5>
                                    <p>ThunderPick Introduces Combo Boost & First Map Insurance for LoL Worlds 2024</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="slider-item text-white text-center p-5">
                                <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Betting Insights</h5>
                                    <p>Latest trends in crypto betting and esports wagering strategies</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="slider-item text-white text-center p-5">
                                <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Upcoming Tournaments</h5>
                                    <p>Stay ahead with our expert analysis of upcoming esports events</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

        <div className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="p-3 border rounded bg-light">
                        <h4>Sports Events</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3 border rounded bg-white">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Best Crypto Betting Sites</h4>
                            <a href="#" className="text-primary">See all crypto betting sites</a>
                        </div>
                        <div className="list-group">
                            {/* Example Entry */}
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="https://via.placeholder.com/50" className="me-3" alt="Site Logo" />
                                    <div>
                                        <strong>Stake.com</strong><br />
                                        Bonus: <span className="text-success">$3000</span><br />
                                        Promo Code: <span className="text-primary">NEWBONUS</span>
                                    </div>
                                </div>
                                <button className="btn btn-success">Claim</button>
                            </div>
                            {/* Repeat for other sites */}
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="https://via.placeholder.com/50" className="me-3" alt="Site Logo" />
                                    <div>
                                        <strong>1xBet</strong><br />
                                        Bonus: <span className="text-success">10,000 BDT</span><br />
                                        Promo Code: <span className="text-primary">NEWBONUS</span>
                                    </div>
                                </div>
                                <button className="btn btn-success">Claim</button>
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button className="btn btn-outline-dark">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-4">
            <h2 className="fw-bold">Trusted Crypto Betting Sites</h2>
            <p>
                We have a full guide to the best betting sites to gamble on with and the table below is where you will find the top-ranked crypto sportsbooks.
            </p>
            <p>
                Read our crypto sports betting site reviews as well as sportsbooks that specialise in specific sports within our <a href="#" className="text-primary">Crypto betting sites</a> section of the site.
            </p>
            <p>
                There are so many crypto betting sites that it can be very difficult to decide which sites are worth your time and money. Some may offer bigger bonuses, but others may offer a more enjoyable experience.
            </p>
            <p>
                With cryptocurrencies still gaining momentum, we’ve made it our aim here at cryptoninjas.com to give all of the information you’ll need to tell which crypto casino sites are reputable and which should be avoided.
            </p>
            <p>
                On this page we aim to provide you with all the information you could possibly need in relation to crypto gambling. This information will include the advantages of using crypto to gamble and how we review and determine the best crypto sites around.
            </p>
            <div className="row text-center mt-4">
                <div className="col-md-3">
                    <div className="card bg-dark text-white p-3">
                        <h5>Stake</h5>
                        <p>Bonus <br /><span className="fw-bold">$3000</span></p>
                        <p>Promo Code <br /><span className="text-warning">NEWBONUS</span></p>
                        <button className="btn btn-warning fw-bold">JOIN</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark text-white p-3">
                        <h5>1XBET</h5>
                        <p>Get <br /><span className="fw-bold">10,000 BDT</span></p>
                        <p>Code <br /><span className="text-warning">NEWBONUS</span></p>
                        <button className="btn btn-warning fw-bold">JOIN</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark text-white p-3">
                        <h5>BC.GAME</h5>
                        <p>Get <br /><span className="fw-bold">$20,000</span></p>
                        <p>Code <br /><span className="text-warning">NEWBONUS</span></p>
                        <button className="btn btn-warning fw-bold">JOIN</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-dark text-white p-3">
                        <h5>MELBET</h5>
                        <p>Bonus <br /><span className="fw-bold">$130</span></p>
                        <p>Promo Code <br /><span className="text-warning">NEWBONUS</span></p>
                        <button className="btn btn-warning fw-bold">JOIN</button>
                    </div>
                </div>
            </div>

            <h2 className="fw-bold">Best Esports Crypto Betting Sites</h2>
            <p>
                Esports is one of the world's fastest-growing industries, largely thanks to the changing demographics, which is becoming increasingly more difficult to ignore. But not only is the esports industry booming, but so is the Esports betting world.
            </p>
            <p>
                Offering many different, unique games to bet on, fast-paced action, and nail-biting moments, it’s easy to see why esports betting has become so popular.
            </p>
            <p>
                And while anyone can start betting on esports, registering with a good bookmaker is only the first but the most important step towards becoming a successful Esports bettor.
            </p>
            <p>
                Even traditional sportsbooks nowadays offer esports betting markets, but as we’ll learn, crypto esports bookmakers offer many advantages. But how do you find one? Crypto Ninjas show you how.
            </p>
            <p>
                Crypto betting has many advantages over traditional betting, which include faster and safer money transfers, higher deposit and withdrawal limits, and fewer restrictions on crypto esports betting sites.
            </p>
            <h3 className="fw-bold">Promo Codes</h3>
            <p>
                <a href="#" className="text-primary">Promo codes</a> are a fantastic tool that enables new users of a specific crypto casino to utilise excellent welcome offers and bonuses.
            </p>
            <p>
                Here at cryptoninjas, you’ll find all the promo codes you need to ensure you always get the best deals when signing up to a new online casino. If you use our codes, you will often get better deals than going direct to websites.
            </p>
            <p>
                Not sure where to sign up next? Check out our <a href="#" className="text-primary">crypto gambling reviews</a> where we detail the welcome bonuses that are available at each casino.
            </p>
            <h3 className="fw-bold">Cryptocurrencies</h3>
            <p>
                We wouldn’t be much of a crypto gambling site if we didn’t provide information on cryptocurrencies alongside our casino and sportsbook expertise, would we?
            </p>
            <p>
                From the top of any page, you can click the <a href="#" className="text-primary">“Cryptocurrency”</a> tab in order to discover information relating to each of the most popular cryptocurrencies like <a href="#" className="text-primary">Bitcoin</a>, <a href="#" className="text-primary">Ethereum</a>, <a href="#" className="text-primary">Litecoin</a>, and <a href="#" className="text-primary">BNB</a> betting sites, as well as some of the lesser known and upcoming digital currencies.
            </p>


            <h2 className="fw-bold">Advantages Of Crypto Gambling</h2>
            <p>
                If there were not numerous advantages to crypto gambling, the industry wouldn’t be anywhere near the sheer size it is today.
            </p>
            <p>
                Here are some of the biggest advantages of casino gambling using cryptocurrencies:
            </p>
            <h5 className="fw-bold">Anonymity</h5>
            <p>
                Because crypto is entirely anonymous, your personal information is kept private during the transaction.
            </p>
            <p>
                Some crypto casino sites even provide completely anonymous accounts, allowing you to play your favourite games without disclosing any personal information.
            </p>
            <p>
                Your transactions at the finest crypto casinos will never appear on your credit card or bank statement.
            </p>
            <h5 className="fw-bold">Decentralisation</h5>
            <p>
                The fact that virtual currencies are decentralised is one of the benefits we enjoy most here at cryptoninjas. This means they have no ties to governments or banks, allowing you to maintain total control over your cash.
            </p>
            <p>
                They can’t be banned, and you can’t have your account frozen. You may also move your cash to a crypto wallet while playing at a crypto casino without anybody knowing.
            </p>
            <h5 className="fw-bold">Worldwide Compatibility</h5>
            <p>
                One of the aims of cryptocurrencies is to offer a global payment system free of bank or government participation or control.
            </p>
            <p>
                Because there is no governmental or institutional oversight over crypto payments, they function and have the same value for all crypto gaming sites, regardless of where you live.
            </p>
            <h5 className="fw-bold">Low Transaction Fees</h5>
            <p>
                Any online business must generate money, and one method to do so is via financial transfers, such as when a consumer makes a deposit or withdrawal.
            </p>
            <p>
                Traditional payment options, as they do everywhere else, come with significant costs at online casinos. Blockchain transaction costs are far cheaper than those charged by traditional means, allowing you to retain more of your winnings than you would at a traditional online casino.
            </p>


            <h2 className="fw-bold">What Is The Best Crypto Betting Site?</h2>
            <p>
                The greatest crypto sites aren’t typically the ones with the highest odds or the most generous bonuses.
            </p>
            <p>
                Crypto players may have a wide range of preferences, prioritising things like loyalty benefits, available games, accepted cryptocurrencies, and even the quality of a casino’s customer service.
            </p>
            <p>
                With this in mind, there are a handful of sites that routinely rank among the finest crypto betting sites available anywhere online, scoring extremely high in each of these categories.
            </p>
            <p>
                This is where our ratings and reviews come into play. When looking for the best crypto site, our evaluations may help you figure out which ones meet the criteria that are most essential to you.
            </p>
            <h2 className="fw-bold">How To Gamble At Crypto Casinos</h2>
            <p>
                Gambling at crypto casinos is just as easy as gambling at any other traditional online casino.
            </p>
            <p>
                It’s simply a case of creating a new account - making the most of any welcome bonuses while doing so - then choosing crypto as your preferred choice of payment method.
            </p>
            <p>
                You will of course need to do a few things in preparation for joining a crypto casino and using cryptocurrencies, though, which we’ll walk you through now.
            </p>
            <h5 className="fw-bold">Buying Cryptocurrencies</h5>
            <p>
                Because there are so many crypto wallets to choose from, it’s critical that you pick one that you can trust.
            </p>
            <p>
                First, keep in mind that you should use a service that provides two-factor authentication. By using two-factor authentication, you make it considerably more difficult for hackers to get access to your account.
            </p>
            <p>
                The second thing to remember is to keep your keys secure since if you lose them, you won’t be able to retrieve your crypto wallet or any assets saved in it. As a result, keep your private keys to yourself.
            </p>
            <p>
                The only piece of information you should give about your wallet is its location. When you wish to cash out, a crypto casino uses this address to transfer money into your wallet.
            </p>
            <p>
                Coinbase is one of the greatest options for a crypto wallet since it is well-known and trustworthy. It’s also one of the most practical since it allows you to purchase and store your coins in one location.
            </p>
            <p>
                Some people prefer cold wallets because they are more secure, however, Coinbase also rates well in this category. If you’re new to virtual currency, this is a terrific way to get started.
            </p>

            <h2 className="fw-bold">What Is The Best Crypto Betting Site?</h2>
            <p>
                The greatest crypto sites aren’t typically the ones with the highest odds or the most generous bonuses.
            </p>
            <p>
                Crypto players may have a wide range of preferences, prioritising things like loyalty benefits, available games, accepted cryptocurrencies, and even the quality of a casino’s customer service.
            </p>
            <p>
                With this in mind, there are a handful of sites that routinely rank among the finest crypto betting sites available anywhere online, scoring extremely high in each of these categories.
            </p>
            <p>
                This is where our ratings and reviews come into play. When looking for the best crypto site, our evaluations may help you figure out which ones meet the criteria that are most essential to you.
            </p>
            <h2 className="fw-bold">How To Gamble At Crypto Casinos</h2>
            <p>
                Gambling at crypto casinos is just as easy as gambling at any other traditional online casino.
            </p>
            <p>
                It’s simply a case of creating a new account - making the most of any welcome bonuses while doing so - then choosing crypto as your preferred choice of payment method.
            </p>
            <p>
                You will of course need to do a few things in preparation for joining a crypto casino and using cryptocurrencies, though, which we’ll walk you through now.
            </p>
            <h3 className="fw-bold">Buying Cryptocurrencies</h3>
            <p>
                Because there are so many crypto wallets to choose from, it’s critical that you pick one that you can trust.
            </p>
            <p>
                First, keep in mind that you should use a service that provides two-factor authentication. By using two-factor authentication, you make it considerably more difficult for hackers to get access to your account.
            </p>
            <p>
                The second thing to remember is to keep your keys secure since if you lose them, you won’t be able to retrieve your crypto wallet or any assets saved in it. As a result, keep your private keys to yourself.
            </p>
            <p>
                The only piece of information you should give about your wallet is its location. When you wish to cash out, a crypto casino uses this address to transfer money into your wallet.
            </p>
            <p>
                Coinbase is one of the greatest options for a crypto wallet since it is well-known and trustworthy. It’s also one of the most practical since it allows you to purchase and store your coins in one location.
            </p>
            <p>
                Some people prefer cold wallets because they are more secure, however, Coinbase also rates well in this category. If you’re new to virtual currency, this is a terrific way to get started.
            </p>
            <h2 className="fw-bold">Depositing & Withdrawing From A Crypto Betting Site</h2>
            <p>
                It is very secure to make a deposit at a crypto casino. Each payment transaction is recorded in the ledger, which is open to the public.
            </p>
            <p>
                Scammers, such as identity thieves, will be unable to use any underhanded techniques on the blockchain thanks to this powerful technology.
            </p>
            <h5 className="fw-bold">Crypto Deposits</h5>
            <p>
                You must first log in to your preferred crypto site in order to make a deposit from your crypto wallet. Then go to the payment section and choose your cryptocurrency wallet.
            </p>
            <p>
                Finally, enter the amount you want to deposit as playable money into your account.
            </p>
            <p>
                If you’re trying to make the most of a welcome bonus, make sure your payment method is not excluded and follow all of the promotional terms and conditions.
            </p>
            <h5 className="fw-bold">Crypto Withdrawals</h5>
            <p>
                A bitcoin betting site’s quick withdrawal process is identical to that of any other.
            </p>
            <p>
                Before making a withdrawal, double-check that you’ve met any wagering requirements, particularly if you’ve spent bonus cash.
            </p>
            <p>
                Simply go back to your site’s payments area, choose your crypto wallet as your withdrawal method, and enter the amount you want to withdraw.
            </p>


            <h2 className="fw-bold">Crypto Betting Sites FAQ</h2>
            
            <h5 className="fw-bold">What is crypto esports betting?</h5>
            <p>
                Betting on esports with crypto has been growing in popularity over the last few years, mainly due to all the advantages crypto betting has over traditional betting.
            </p>
            <p>
                This has also helped more crypto esports bookmakers enter the market, giving punters more options when deciding which betting site to use.
            </p>
            
            <h5 className="fw-bold">Which is the best Crypto Betting Site?</h5>
            <p>
                The best crypto betting site could be the one that offers the biggest bonuses, the best Return To Player %, the greatest range of games, the widest range of cryptocurrency options, the greatest anonymity, and the most efficient customer service.
            </p>
            <p>
                But, ultimately, the best crypto casino is the one that scores the highest in whichever factor is the most important to you.
            </p>
            
            <h5 className="fw-bold">Which Cryptocurrency Is Best For Gambling?</h5>
            <p>
                While any cryptocurrency can be accepted by the top crypto casino sites, the best ones to use are those that are most sustainable, like Ethereum or any tethered altcoins.
            </p>
            <p>
                If you gamble with a crypto that is on the rise, your winnings could be worth much more, but if that crypto crashes, you can only come out of the situation as a loser.
            </p>
            
            <h5 className="fw-bold">Where Can I Buy Crypto To Gamble With?</h5>
            <p>
                Cryptocurrencies can be purchased from a number of online platforms. Some of the most popular include Coinbase, crypto.com, and Gemini.
            </p>
            <p>
                Before you buy any crypto, make sure your choice of casino accepts the one you’re trying to buy and check that that particular crypto does not have any huge fees attached.
            </p>

        </div>
      </div>
      <Footer></Footer>
   
    </>
  )
}

export default App
