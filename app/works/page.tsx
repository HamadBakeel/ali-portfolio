import PageSubtitle from '@/components/pageSubtitle'
import PageTitle from '@/components/pageTitle'
import Image from 'next/image'
import React from 'react'
import TestimonialsSwiper from './components/TestimonialsSwiper'

function Works() {

type TestimonialType= {
    message: string;
    name: string;
    work: string;
  }
  

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

  const testimonials: TestimonialType[] = [
    {
      message: '“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”',
      name: '-Larry Diamond',
      work: 'Chief Executive Officer, Besnik'
    },
    {
      message: '“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”',
      name: '-Larry Diamond',
      work: 'Chief Executive Officer, Besnik'
    },
    {
      message: '“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”',
      name: '-Larry Diamond',
      work: 'Chief Executive Officer, Besnik'
    },
    {
      message: '“ File storage made easy – including powerful features you won’t find anywhere else. Whether you’re.”',
      name: '-Larry Diamond',
      work: 'Chief Executive Officer, Besnik'
    },
  ]

  const customers  =[
    'wajabat',
    'otek',
    'marasi',
    'one-graphics',
    'yemenia',
  ]
  return (
    <main className="w-full min-h-screen pt-24 pb-20 px-6 md:px-[3vw] lg:px-[5vw] xl:px-[7vw] max-w-screen-xl">
      <PageTitle text='Work'/>
      <PageSubtitle text="recent projects"/>

      <section className='my-8 grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-28'>
        {works.map(work => (
          <Work key={work.id} id={work.id} title={work.title} type={work.type} image={work.image} link={work.link}/>
        ))}
      </section>

      <section className=' bg-gradient-custom px-16 pt-20'>
        <PageTitle text="Testimonials" additionalClasses='text-white text-center'/>
        <PageSubtitle text='what they say' additionalClasses='text-white text-center'/>
        
        
        <div className='grid grid-cols-12 space-x-10 border-b border-white mt-8'>

          <div className="col-span-5">
            <Image className='w-[85%] ' src='/assets/images/testimonials-person-image.svg' alt='' width={10} height={10}/>
          </div>
          <div className="col-span-7 mb-8">
          <TestimonialsSwiper data={testimonials}/>
          </div>
        </div>
        <div className='flex gap-6 justify-between max-w-full py-8'>
          {
            customers.map((customer) =>{
              return (
                <div className=' w-auto h-12 max-w-[30%]' key={customer}>
                <Image className=' w-full h-full'  src={`/assets/icons/customers/${customer}.svg`} alt='' width={10} height={100}/>
                </div>
              )
            })
          }
        </div>
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