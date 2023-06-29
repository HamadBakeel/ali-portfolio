import PageSubtitle from '@/components/pageSubtitle'
import PageTitle from '@/components/pageTitle'
import Image from 'next/image'
import React from 'react'

function Works() {

  const works: WorkType[] = [
    {
      id: 0,
      type: 'UX case study',
      title: 'Bally website research',
      image: "https://picsum.photos/400/200",
      link: 'https://project.com'
    },
    {
      id: 1,
      type: 'UX case study',
      title: 'Bally website research',
      image: "https://picsum.photos/400/200",
      link: 'https://project.com'
    },
    {
      id: 2,
      type: 'UX case study',
      title: 'Bally website research',
      image: "https://picsum.photos/400/200",
      link: 'https://project.com'
    },
    {
      id: 3,
      type: 'UX case study',
      title: 'Bally website research',
      image: "https://picsum.photos/400/200",
      link: 'https://project.com'
    },
  ]

  return (
    <main className="w-full min-h-screen pt-24 px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw] max-w-screen-xl">
      <PageTitle text='Work'/>
      <PageSubtitle text="recent projects"/>

      <section className='my-8 grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-28'>
        {works.map(work => (
          <Work key={work.id} id={work.id} title={work.title} type={work.type} image={work.image} link={work.link}/>
        ))}
      </section>
    </main>
  )
}

export default Works


type WorkType ={
  id: number;
  type: string;
  title: string;
  image: string;
  link: string;
}
function Work({id, type, title, image, link}: WorkType) {

  return(
    <a href={link} className='flex flex-col md:flex-row gap-1 col-span-1'>
      <div className='flex flex-col justify-between'>
        <h3 className='italic font-bold '>{type}</h3>
        <h4 className=' text-4xl font-extrabold capitalize'>{title}</h4>
        <Image className=' w-10 md:w-14' src='/assets/icons/north-east-arrow.svg' alt='' width={10} height={10}/>
      </div>
      
      <div className=' min-w-[55%] w-full md:w-72 h-60 md:h-56'>
      <Image className=' w-full h-full object-cover' src={image} alt='' width={10} height={10}/>
      </div>
    </a>
  )
}