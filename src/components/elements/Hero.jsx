
import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


const carouselData = [{
  img: 'assets/banner.png',
  title: 'A Nation Gathers!',
  content: 'Origin is now available to play via Mavis Hub!',
}, {
  img: 'assets/banner.png',
  title: 'A Nation Gathers!',
  content: 'Origin is now available to play via Mavis Hub!',
}, {
  img: 'assets/banner.png',
  title: 'A Nation Gathers!',
  content: 'Origin is now available to play via Mavis Hub!',
}]


const lunaciaCardData = [{
  cardImage: 'assets/axises.svg',
  cardName: 'New Axies',
  cardUser: '6,984'
}, {
  cardImage: 'assets/battles-stats.svg',
  cardName: 'Origins Battles',
  cardUser: '2,597,681'
}, {
  cardImage: 'assets/sales-stats.svg',
  cardName: 'Sales Volum',
  cardUser: '1,018'
}];

const overallCardData = [{
  cardImage: 'assets/tab-axie.svg',
  cardName: 'Total Axies',
  cardUser: '11,568,537',
  border: ''
}, {
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

const gameCard = [{
  cardImage: 'assets/game-card-1.png',
  cardName: 'Axie Infinity: Origins',
  border: ''
}, {
  cardImage: 'assets/game-card-2.png',
  cardName: 'Axie Classic',
  border: 'assets/vertical-Line.svg'
}, {
  cardImage: 'assets/game-card-1.png',
  cardName: 'Axie Infinity: Raylights',
  border: 'assets/vertical-Line.svg'
},]

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="banner">
          <div className="heading">
            <h3>Welcome to Crypto Yield.</h3>
          </div>
          <div className="carosel-banner">
            <Carousel fade>
              {
                carouselData.map((items) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={items.img}
                        alt="First slide"
                        style={{ height: '346px' }}
                      />
                      <Carousel.Caption>
                        <h2 className='mb-0'>{items.title}</h2>
                        <p>{items.content}</p>
                        <div className="d-flex flex-wrap">
                          <button className="btn-ticket mb-3 mb-md-0 d-flex align-items-center justify-content-center" style={{ marginRight: '20px' }}>Buy Ticket</button>
                          <button className='btn-ticket2 d-flex align-items-center justify-content-center'>Buy Ticket</button>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })
              }
            </Carousel>
          </div>
        </div>

        {/* ///////////////////////////// LUNACIA SECTION /////////////////// */}
        <div className="this-week-lunacia">
          <h2>This week in Lunacia</h2>
          <h6>General stats from the past 7 days in the Axie Infinity universe.</h6>
          <div className="row">
            {
              lunaciaCardData.map((items) =>
                <div className="col-md-4 mb-3 mb-md-0" key={items.id}>
                  <div className="lunacia-card">
                    <div className="card-img">
                      <img src={items.cardImage} alt="" />
                    </div>
                    <div className="card-title">
                      <h6>{items.cardName}</h6>
                    </div>
                    <div className="card-user">
                      <h2>{items.cardUser}</h2>
                    </div>
                  </div>
                </div>

              )
            }
          </div>
        </div>

        {/* /////////////////// ALL SEAT SECTION ///////////////////////// */}
        <div className="all-seat">
          <Card>
            <Card.Header as="h2">Overall stats</Card.Header>
            <Card.Body>
              <div className="row">
                {
                  overallCardData.map((item) => {
                    return (
                      <div className="col-md-3 mb-4 mb-md-0" key={item.id}>
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

        {/* ///////////////// GAME SECTION /////////////////// */}
        <div className="Game-section">
          <Card>
            <Card.Header as="h2">Games</Card.Header>
            <Card.Body>
              <div className="row">
                {
                  gameCard.map((item) => {
                    return (
                      <div className="col-md-4 p-0 mb-4 mb-md-0" key={item.id}>
                        <div className="d-flex">
                          <div className="card-vertical-line d-flex align-items-end">
                            <img src={item.border} alt='' style={{ marginRight: '15px' }} />
                          </div>
                          <div className="allseat-card d-flex align-items-center">
                            <img src={item.cardImage} alt="" className='img-fluid' />
                            <div className="card-content">
                              <div className="card-title">
                                <h6 className='mb-0'>{item.cardName}</h6>
                              </div>
                              <div className="card-btn d-flex">
                                <a href="/"><img src='assets/btn-play.svg' alt='' /></a>
                                <a href="/"><img src='assets/btn-view.svg' alt='' /></a>
                              </div>
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
      </div>
    </div>
  )
}

export default Hero