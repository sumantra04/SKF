import React from 'react'
import image1 from '@/../public/assets/icons/SKF-Logo.png'
import economic from '@/../public/assets/icons/E-WEB-Goal-08.png'
import parnter from '@/../public/assets/icons/E-WEB-Goal-17.png'
import inequality from '@/../public/assets/icons/E-WEB-Goal-10.png'
import Image from 'next/image'
interface ThematicArea {
    slug: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    content:string;
  }

// Data for thematic areas
const thematicAreas: ThematicArea[] = [
    {
      slug: 'lorem',
      title: 'lorem ipsum',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur aspernatur itaque rem veniam esse, sed enim fugit totam reiciendis et omnis neque ipsa ut id aliquid eligendi numquam doloremque!",
      icon: <Image src={image1} className='w-32 h-32 ' alt={'Decent Work and Economic Growth'} />,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi sequi repellendus aut, quas ipsum maxime eos quae deserunt omnis. Veniam voluptatum magni maxime iure maiores numquam mollitia enim? Sunt.",
    },
    {
      slug: 'lorem',
      title: 'lorem ipsum',
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sint. Reprehenderit, consequuntur ipsa commodi porro distinctio ratione labore eum mollitia modi placeat, natus unde deleniti saepe nisi, veritatis iste cupiditate.",
      icon: <Image src={image1} className='w-32 h-32 ' alt={'Decent Work and Economic Growth'} />,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla saepe asperiores eius delectus, quibusdam libero quidem soluta ducimus magni, consequuntur quis aut fuga laudantium qui voluptates. Sequi, expedita doloribus.",
    },
  ];

  export default thematicAreas;