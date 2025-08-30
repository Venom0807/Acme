import React from 'react'
import Card from 'react-bootstrap/Card';
const cardInfo = [
    {
        title: "Lifetime Warranty",
        text: "Choose from a vast array of outdoor gear and apparel to suit your adventures.",
        icon: "busi1.svg"
    },
    {
        title: "Shopping Experience",
        text: "Our knowledgeable staff is here to help you find the perfect equipment.",
        icon: "busi2.svg"
    },
    {
        title: "On-time Delivery",
        text: "We stock top brands known for durability and performance in the great outdoors.",
        icon: "busi3.svg"
    },
    {
        title: "Best in Class Service",
        text: "We prioritize your satisfaction with excellent service and support.",
        icon: "busi4.svg"
    }
];
function Business() {
  return (
    <div className='h-[60vh] mainWidth flex flex-col justify-center gap-10 my-20 business'>
        <div className="busiCon flex flex-col items-center">
            <p>Why Acme Outdoors?</p>
            <h2 >We’re the best in the business.</h2>
            <p className=' text-center'>From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer experience since 1989.</p>
        </div>
        <div className="busiCards flex justify-between mt-10 flex-wrap">
        {cardInfo.map((mereCard)=>(
          <Card className='!bg-white  border-0 w-[280px] busiCard'>
          <Card.Header className='border-0 bg-white'><img src={mereCard.icon} alt="" /></Card.Header>
          <Card.Body>
            <Card.Title > {mereCard.title} </Card.Title>
            <Card.Text>
              {mereCard.text}
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
        </div>
    </div>
  )
}

export default Business