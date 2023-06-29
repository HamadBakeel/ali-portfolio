import React from 'react'

type PageSubtitleType={
    text: string;
    additionalClasses?: string;
}
function PageSubtitle({text, additionalClasses }: PageSubtitleType) {
  return (
    <h2 className={"uppercase text-4xl font-bold " + additionalClasses}>{text}</h2>
  )
}

export default PageSubtitle