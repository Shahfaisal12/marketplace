import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import AppleIcon from '@mui/icons-material/Apple';
import { BsWindows, BsFillInfoCircleFill } from 'react-icons/bs'
import { DiAndroid } from 'react-icons/di'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const gameDetailData = [{
    img: 'assets/gamedetail/announce-1.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'
}, {
    img: 'assets/gamedetail/announce-2.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'
}, {
    img: 'assets/gamedetail/announce-3.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'
},]


const GameDetail = () => {
    return (

        <div className="game-detail-section all-game-section ">
           <div className="container">

           <div className="banner">
                <div className="d-flex align-items-baseline">
                    <div className="heading">
                        <h3 className='mb-1'>Axie Infinity: Origins</h3>
                        <p className='mb-0'>A PVP tactical card battler Install Mavis Hub</p>
                    </div>
                    <div className="icons">
                        <AppleIcon className='icon' /> <BsWindows className='icon' /> <DiAndroid className='icon' />
                    </div>
                    <div className=" p-2" style={{ marginLeft: 'auto' }}><a href='/'><img src="assets/gamedetail/btn-install.svg" alt="" /></a></div>
                </div>
                <div className="carosel-banner">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/gamedetail/banner.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/gamedetail/banner.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/gamedetail/banner.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="nav-section">
                <div className="d-flex justify-content-between">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active text-center" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                        </li>
                    </ul>
                    <div className="next-arrow">
                        <div className="previous-btn"><FaArrowLeft className='mr-32' /> <FaArrowRight /></div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {
                                gameDetailData.map((item) => {
                                    return (
                                        <div className="col-md-4" key={item.id}>
                                            <Card>
                                                <Card.Img variant="top" src={item.img} />
                                                <Card.Body>
                                                    <Card.Title className='mb-1'>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        S{item.text}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="GameInfo-section">
                            <Card>
                                <Card.Header as="h2"><div className="d-flex justify-content-between">
                                    <h2>Game Info</h2>
                                    <div className="icons d-flex flex-wrap align-items-center">
                                        <h6 className='mb-0'>Collectibles</h6><BsFillInfoCircleFill className='mx-1 info-icon' />
                                        <img src="assets/gamedetail/tab-axie.svg" className='img-fluid' alt="" />
                                        <img src="assets/gamedetail/collectibles-ac.svg" className='img-fluid' alt="" />
                                        <img src="assets/gamedetail/collectibles-ar.svg" className='img-fluid' alt="" />
                                    </div>
                                </div>
                                </Card.Header>
                                <Card.Body>
                                    <h5>What is Axie Infinity: Origins?</h5>
                                    <p>Axie Infinity Origins is a card-based strategy game where players collect, own, and use an infinite variety of creatures called Axies to battle. Players can take down evil Chimeras in the Adventure mode or challenge other players in the Arena to reach the top of the Leaderboard.</p>
                                    <div className="img">
                                        <img src="assets/gamedetail/gaminfoimg.png" className='w-100' alt="" />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="tab-pane fade text-white" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Empty</div>
                </div>
            </div>
           </div>
        </div>

    )
}

export default GameDetail