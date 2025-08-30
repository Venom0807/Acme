import React from 'react'
import Card from 'react-bootstrap/Card';
const teamCard = [
    {
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        avatar: "larka.png"
    },
    {
        name: "Jane Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        avatar: "larki.png"
    },
];
function Testimonial() {
  return (
    <div className='h-[60vh] mainWidth flex flex-col justify-center my-20 testimonial'>
    <div className='tCards flex justify-center flex-wrap gap-40'>
    {teamCard.map((mereCard)=>(   
        <Card className='flex flex-col items-center text-center darkcard border-0 w-[400px] tCard'>
            <Card.Img src={mereCard.avatar} className='!w-[200px]' />
            <Card.Body>
              <Card.Title>{mereCard.name}</Card.Title>
              <Card.Text >
                {mereCard.text}
              </Card.Text>
            </Card.Body>
          </Card>
    ))}
    </div>
    </div>
  )
}

export default Testimonial