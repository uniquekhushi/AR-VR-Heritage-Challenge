import React, { useEffect, useState } from 'react';
import { Carousel, Card, Col,Row,Button } from 'antd';
// import 'antd/dist/antd.css';
import china from './images/greatchina.jpg';
import machu from './images/machu.jpg';
import petra from './images/petrajordan.jpg';
import taj from './images/taj.jpg';
import colo from './images/colosseum.jpg';
import chixen from './images/chixen.jpg';
import christ from './images/chirst.jpg'
import TajMahalHistory from './TajMahalHistory ';


const wonders = [
  {
    name: 'Great Wall of China',
    description: 'Ancient wall in China, built to protect against invasions.',
    image: china,
  },
  {
    name: 'Petra',
    description: 'Historical and archaeological city in southern Jordan.',
    image: petra,
  },
  {
    name: 'Christ the Redeemer',
    description: 'Large statue of Jesus Christ in Rio de Janeiro, Brazil.',
    image: christ,
  },
  {
    name: 'Machu Picchu',
    description: '15th-century Inca citadel in Peru.',
    image: machu,
  },
  {
    name: 'Chichen Itza',
    description: 'Large pre-Columbian archaeological site in Mexico.',
    image: chixen,
  },
  {
    name: 'Roman Colosseum',
    description: 'Ancient amphitheatre in Rome, Italy.',
    image: colo,
  },
  {
    name: 'Taj Mahal',
    description: 'Mausoleum in Agra, India.',
    image: taj,
  },
];

const SevenWondersCarousel = () => {
    const [showTaj,setShowTaj] = useState();

//   return (
//     <div style={{ width: '100%',height:"100px", margin: '0 auto', padding: '30px' }}>
//       <Carousel autoplay>
//         {wonders.map((wonder, index) => (
//           <div key={index}>
//             <Card
//               hoverable
//               cover={<img alt={wonder.name} src={wonder.image} />}
//               title={wonder.name}
//               style={{ textAlign: 'center' }}
//             >
//               <Card.Meta description={wonder.description} />
//             </Card>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
return (
    // <div style={{ padding: '30px' }}>
    //   <Row gutter={[16, 16]}>
    //     {wonders.map((wonder, index) => (
    //       <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
    //         <Card
    //           hoverable
    //           cover={<img alt={wonder.name} src={wonder.image} style={{ height: '150px', objectFit: 'cover' }} />}
    //           title={wonder.name}
    //           style={{ height: '300px' }}
    //         >
    //           <Card.Meta description={wonder.description} />
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>
    <div style={{ padding: '30px' }}>
    <Row gutter={[16, 16]} justify="center">
      {wonders.map((wonder, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={3}>
          <Card
            hoverable
            cover={<img alt={wonder.name} src={wonder.image} style={{ height: '300px', objectFit: 'cover'}} />}
            title={wonder.name}
            style={{ height: '300px' }}
          >
            <Button type="primary" onClick={()=> setShowTaj(true)}>Explore</Button>
            <Card.Meta description={wonder.description} />
            { showTaj &&<TajMahalHistory/>}
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default SevenWondersCarousel;
