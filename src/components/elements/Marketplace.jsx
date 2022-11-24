import React from 'react'
import { Card } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const overallCardData = [{
    cardImage: 'assets/axies-stats-small.svg',
    cardName: 'Total Owners',
    cardUser: '2,050,716',
    border: 'assets/vertical-Line.svg'
}, {
    cardImage: 'assets/meo-token.svg',
    cardName: 'Total Volume (ETH)',
    cardUser: '1,362,030',
    border: 'assets/vertical-Line.svg'
}, {
    cardImage: 'assets/axies-stats-small.svg',
    cardName: 'Transections',
    cardUser: '18,164,083',
    border: 'assets/vertical-Line.svg'
},];


const saleData = [{
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

const Marketplace = () => {
    return (
        <div className="marketplace-section">
            <div className="all-seat">
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-between">
                            <h2>Overall stats</h2>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active text-center" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                                </li>
                            </ul>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="row">
                            {
                                overallCardData.map((item) => {
                                    return (
                                        <div className="col-md-4" key={item.id}>
                                            <div className="d-flex align-items-end">
                                                <div className="card-vertical-line">
                                                    <img src={item.border} alt='' />
                                                </div>
                                                <div className="allseat-card">
                                                    <div className="card-img">
                                                        <img src={item.cardImage} alt="" />
                                                    </div>
                                                    <div className="card-title">
                                                        <h6 className='mb-0'>{item.cardName}</h6>
                                                    </div>
                                                    <div className="card-user">
                                                        <h2>{item.cardUser}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Card.Body>
                </Card>
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
                                saleData.map((item) => {
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
                    </div>
                    <div className="tab-pane fade text-white" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Empty</div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace