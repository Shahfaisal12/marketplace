import React from 'react'
import Card from 'react-bootstrap/Card';


const allGameData = [{
    img: 'assets/allgame/card1.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'

}, {
    img: 'assets/allgame/card2.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'

}, {
    img: 'assets/allgame/card3.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'

}, {
    img: 'assets/allgame/card4.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'

}, {
    img: 'assets/allgame/card5.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'

}, {
    img: 'assets/allgame/card6.png',
    title: 'Axie Infinity: Origins',
    text: 'Sky Mavis'

},]

const AllGame = () => {
    return (
        <div className="all-game-section">
            <div className="title">
                <h3>All Games</h3>
            </div>
            <div className="row">
                {
                    allGameData.map((item) => {
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
    )
}

export default AllGame