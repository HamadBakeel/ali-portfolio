import PageSubtitle from '@/components/pageSubtitle'
import PageTitle from '@/components/pageTitle'
import React from 'react'

function Works() {
  return (
    <main className="w-full min-h-screen pt-24 px-8 md:px-[3vw] lg:px-[5vw] xl:px-[7vw] max-w-screen-xl">
      <PageTitle text='Work'/>
      <PageSubtitle text="recent projects"/>
    </main>
  )
}

export default Works