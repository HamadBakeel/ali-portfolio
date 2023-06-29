import React from 'react'

type PageTitleType={
    text: string;
    additionalClasses?: string ;
}
function PageTitle({text, additionalClasses }: PageTitleType) {
  return (
    <h1 className={"italic font-bold mb-1 " + additionalClasses}>{text}</h1>
  )
}

export default PageTitle