import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiInformationCircle, HiLocationMarker } from 'react-icons/hi'
import { CgMenuRight } from 'react-icons/cg'


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
    img: 'assets/marketplace/sale1.png',
    title: 'Nimo',
    text: 'MZ Guild 1→Lunacian #4913023',
    bgImage: '/assets/marketplace/salebg1.png',
    color: '#0AD4FC'
}, {
    img: 'assets/marketplace/sale2.png',
    title: 'Nimo',
    text: 'MZ Guild 1→Lunacian #4913023',
    bgImage: '/assets/marketplace/salebg2.png',
    color: '#E27F34'
}, {
    img: 'assets/marketplace/sale3.png',
    title: 'Nimo',
    text: 'MZ Guild 1→Lunacian #4913023',
    bgImage: '/assets/marketplace/salebg3.png',
    color: '#76E234'
},]

const recentData = [{
    img: 'assets/marketplace/sale3.png',
    title: 'Nimo',
    text: 'MZ Guild 1→Lunacian #4913023',
    bgImage: '/assets/marketplace/salebg3.png',
    color: '#76E234'
}, {
    img: 'assets/marketplace/sale1.png',
    title: 'Nimo',
    text: 'MZ Guild 1→Lunacian #4913023',
    bgImage: '/assets/marketplace/salebg1.png',
    color: '#0AD4FC'
}, {
    img: 'assets/marketplace/sale2.png',
    title: 'Nimo',
    text: 'MZ Guild 1→Lunacian #4913023',
    bgImage: '/assets/marketplace/salebg2.png',
    color: '#E27F34'
}]

const topSaleData = [{
    img: 'assets/marketplace/topsale1.png',
    color: '#76E234',
}, {
    img: 'assets/marketplace/topsale2.png',
    color: '#FF6262',
}, {
    img: 'assets/marketplace/topsale3.png',
    color: '#0AD4FC',
}, {
    img: 'assets/marketplace/topsale4.png',
    color: '#D895FF',
}, {
    img: 'assets/marketplace/topsale5.png',
    color: '#0AD4FC',
}, {
    img: 'assets/marketplace/topsale6.png',
    color: '#D895FF',
}, {
    img: 'assets/marketplace/topsale7.png',
    color: '#76E234',
}, {
    img: 'assets/marketplace/topsale8.png',
    color: '#FF6262'
}, {
    img: 'assets/marketplace/topsale9.png',
    color: '#0AD4FC',
},]

const Marketplace = () => {
    return (
        <div className="marketplace-section">
            <div className="all-seat">
                <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <h2 className='mb-0'>Overall stats</h2>
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active text-center" id="pills-24H-tab" data-toggle="pill" href="#pills-24H" role="tab" aria-controls="pills-home" aria-selected="true">24H</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center" id="pills-7D-tab" data-toggle="pill" href="#pills-7D" role="tab" aria-controls="pills-profile" aria-selected="false">7D</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-30D-tab" data-toggle="pill" href="#pills-30D" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                            </li>
                        </ul>
                    </Card.Header>
                    <Card.Body>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-24H" role="tabpanel" aria-labelledby="pills-24H-tab">
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
                            </div>
                            <div className="tab-pane fade text-white" id="pills-7D" role="tabpanel" aria-labelledby="pills-7D-tab">Empty</div>
                            <div className="tab-pane fade text-white" id="pills-30D" role="tabpanel" aria-labelledby="pills-30D-tab">No Data</div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="nav-section top-sale-sec">
                <div className="d-flex justify-content-between">
                    <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                        <h2 style={{ marginRight: '24px', color: '#F4F6F9' }}>Top Sales</h2>
                        <li className="nav-item">
                            <a className="nav-link active text-center" id="pills-home-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-axie" role="tab" aria-controls="pills-profile" aria-selected="false">Axie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-land" role="tab" aria-controls="pills-profile" aria-selected="false">Land</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-item" role="tab" aria-controls="pills-profile" aria-selected="false">Item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-rune" role="tab" aria-controls="pills-profile" aria-selected="false">Rune</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-charm" role="tab" aria-controls="pills-profile" aria-selected="false">Charm</a>
                        </li>
                    </ul>
                    <div className="tab-3d">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active text-center" id="pills-24H-top-tab" data-toggle="pill" href="#pills-top-24H" role="tab" aria-controls="pills-home" aria-selected="true">24H</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center" id="pills-7D-top-tab" data-toggle="pill" href="#pills-top-7D" role="tab" aria-controls="pills-profile" aria-selected="false">7D</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-30D-top-tab" data-toggle="pill" href="#pills-top-30D" role="tab" aria-controls="pills-contact" aria-selected="false">30D</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {
                                topSaleData.map((items) => {
                                    return (
                                        <div className="col-md-4">
                                            <Card>
                                                <Card.Body>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <img src={items.img} className='img-fluid' alt="" style={{ marginRight: '10px' }} />
                                                            <div className="location-title">
                                                                <div className="borderss d-flex align-items-center" style={{ border: `1px solid ${items.color}` }}>
                                                                    <p className='mb-0' style={{ color: items.color }}><HiLocationMarker />&nbsp; -68, -77</p>
                                                                </div>
                                                                <Card.Text className='mb-1'>17 Hours Ago</Card.Text>
                                                            </div>
                                                        </div>
                                                        <div className="right-content text-end">
                                                            <Card.Title className='mb-1'>$22,137.48</Card.Title>
                                                            <Card.Text className='mb-0'><CgMenuRight className='fw-bold fs-5' />&nbsp; 0.548</Card.Text>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade text-white" id="pills-axie" role="tabpanel" aria-labelledby="pills-profile-tab">axie</div>
                    <div className="tab-pane fade text-white" id="pills-land" role="tabpanel" aria-labelledby="pills-profile-tab">land</div>
                    <div className="tab-pane fade text-white" id="pills-item" role="tabpanel" aria-labelledby="pills-profile-tab">item</div>
                    <div className="tab-pane fade text-white" id="pills-rune" role="tabpanel" aria-labelledby="pills-profile-tab">rune</div>
                    <div className="tab-pane fade text-white" id="pills-charm" role="tabpanel" aria-labelledby="pills-profile-tab">charm</div>
                    {/*   3D tabs content */}
                    <div className="tab-pane fade text-white" id="pills-top-24H" role="tabpanel" aria-labelledby="pills-profile-tab">24H</div>
                    <div className="tab-pane fade text-white" id="pills-top-7D" role="tabpanel" aria-labelledby="pills-profile-tab">7D</div>
                    <div className="tab-pane fade text-white" id="pills-top-30D" role="tabpanel" aria-labelledby="pills-profile-tab">30D</div>
                </div>
            </div>


            <div className="nav-section Recent-sale-sec">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <h2 style={{ marginRight: '24px', color: '#F4F6F9' }}>Recent sales</h2>
                        <li className="nav-item">
                            <a className="nav-link active text-center" id="pills-home-tab" data-toggle="pill" href="#pills-sale-all" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-sale-axie" role="tab" aria-controls="pills-profile" aria-selected="false">Axie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-sale-land" role="tab" aria-controls="pills-profile" aria-selected="false">Land</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-sale-item" role="tab" aria-controls="pills-profile" aria-selected="false">Item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-sale-rune" role="tab" aria-controls="pills-profile" aria-selected="false">Rune</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-sale-charm" role="tab" aria-controls="pills-profile" aria-selected="false">Charm</a>
                        </li>
                    </ul>
                    <div className="next-arrow">
                        <div className="previous-btn"><FaArrowLeft className='mr-32' /> <FaArrowRight className='text-white' /></div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-sale-all" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {
                                saleData.map((item) => {
                                    return (
                                        <div className="col-md-4" key={item.id}>
                                            <Card className='mb-2'>
                                                <Card.Img variant="top" src={item.img} style={{ backgroundImage: `url(${item.bgImage})` }} />
                                                <Card.Body className='d-flex justify-contact-between align-items-center'>
                                                    <div className="context">
                                                        <Card.Title className='mb-1'>{item.title}</Card.Title>
                                                        <Card.Text>
                                                            {item.text}
                                                        </Card.Text>
                                                    </div>
                                                    <HiInformationCircle style={{ color: '#A5ABB3' }} />
                                                </Card.Body>
                                                <Badge className='position-absolute d-flex align-items-center justify-content-center' style={{ color: item.color }}>#5485212</Badge>
                                            </Card>
                                            <p>2 minutes ago</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade text-white" id="pills-sale-axie" role="tabpanel" aria-labelledby="pills-profile-tab">axie</div>
                    <div className="tab-pane fade text-white" id="pills-sale-land" role="tabpanel" aria-labelledby="pills-profile-tab">land</div>
                    <div className="tab-pane fade text-white" id="pills-sale-item" role="tabpanel" aria-labelledby="pills-profile-tab">item</div>
                    <div className="tab-pane fade text-white" id="pills-sale-rune" role="tabpanel" aria-labelledby="pills-profile-tab">rune</div>
                    <div className="tab-pane fade text-white" id="pills-sale-charm" role="tabpanel" aria-labelledby="pills-profile-tab">charm</div>
                </div>
            </div>

            {/* ////////////////////////////// RECENT  LISTING */}

            <div className="recent-list Recent-sale-sec">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <h2 style={{ marginRight: '24px', color: '#F4F6F9' }}>Recent Listings</h2>
                        <li className="nav-item">
                            <a className="nav-link active text-center" id="pills-home-tab" data-toggle="pill" href="#pills-recent-all" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-recent-axie" role="tab" aria-controls="pills-profile" aria-selected="false">Axie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-recent-land" role="tab" aria-controls="pills-profile" aria-selected="false">Land</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-recent-item" role="tab" aria-controls="pills-profile" aria-selected="false">Item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-recent-rune" role="tab" aria-controls="pills-profile" aria-selected="false">Rune</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-center" id="pills-profile-tab" data-toggle="pill" href="#pills-recent-charm" role="tab" aria-controls="pills-profile" aria-selected="false">Charm</a>
                        </li>
                    </ul>
                    <div className="next-arrow">
                        <div className="previous-btn"><FaArrowLeft className='mr-32' /> <FaArrowRight className='text-white' /></div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-recent-all" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            {
                                recentData.map((item) => {
                                    return (
                                        <div className="col-md-4" key={item.id}>
                                            <Card className='mb-2'>
                                                <Card.Img variant="top" src={item.img} style={{ backgroundImage: `url(${item.bgImage})` }} />
                                                <Card.Body className='d-flex justify-contact-between align-items-center'>
                                                    <div className="context">
                                                        <Card.Title className='mb-1'>{item.title}</Card.Title>
                                                        <Card.Text>
                                                            {item.text}
                                                        </Card.Text>
                                                    </div>
                                                    <HiInformationCircle style={{ color: '#A5ABB3' }} />
                                                </Card.Body>
                                                <Badge className='position-absolute d-flex align-items-center justify-content-center' style={{ color: item.color }}>#5485212</Badge>
                                            </Card>
                                            <p>2 minutes ago</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade text-white" id="pills-recent-axie" role="tabpanel" aria-labelledby="pills-profile-tab">axie</div>
                    <div className="tab-pane fade text-white" id="pills-recent-land" role="tabpanel" aria-labelledby="pills-profile-tab">land</div>
                    <div className="tab-pane fade text-white" id="pills-recent-item" role="tabpanel" aria-labelledby="pills-profile-tab">item</div>
                    <div className="tab-pane fade text-white" id="pills-recent-rune" role="tabpanel" aria-labelledby="pills-profile-tab">rune</div>
                    <div className="tab-pane fade text-white" id="pills-recent-charm" role="tabpanel" aria-labelledby="pills-profile-tab">charm</div>
                </div>
            </div>

            <div className="border-vertical-linereee"></div>
        </div>
    )
}

export default Marketplace