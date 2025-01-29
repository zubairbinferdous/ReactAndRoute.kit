
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
      </div>
      <Footer></Footer>
   
    </>
  )
}

export default App
