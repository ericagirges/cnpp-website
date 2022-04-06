import React from 'react'
import { useState } from 'react'
import AccordionLayout from './AccordionLayout'

import { NewsContent } from '../../../page-content/NewsContent'

const UpdatesAccordion = () => {
  const [activeIdx, setActiveIdx] = useState([])

  return (
    <div className="accordion mt-4 mb-6">
      {NewsContent.map((newsItem) => (
        <AccordionLayout
          date={newsItem.date}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
          index={newsItem.index}
        >
          <p className="mb-4">{newsItem.content}</p>
          <a href={newsItem.link} target="_blank" rel="noreferrer noopener">{newsItem.link}</a>
        </AccordionLayout>
      ))}
    </div>
  )
}

export default UpdatesAccordion
