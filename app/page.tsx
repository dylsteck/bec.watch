/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { DAY_CONTENT } from '@/lib/data'
import { useState } from 'react'

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(DAY_CONTENT[0].date)
  const selectedContent = DAY_CONTENT.find(content => content.date === selectedDate) || DAY_CONTENT[0]

  function renderStars(rating: number) {
    const fullStars = Math.floor(rating)
    const stars = []
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`star-${i}`}
          src="/star.png"
          alt="star"
          className="inline-block max-w-[20px] max-h-[20px] star-image"
        />
      )
    }
    return stars
  }

  return (
    <main className="min-h-screen bg-whitesmoke font-[Helvetica,Arial,sans-serif] text-center">
      <div className="center min-h-screen mx-auto overflow-hidden p-4">
        <details>
          <summary className="title cursor-default">
            bec.watch
          </summary>
          <p className="m-0 p-0">
            a log of all the bacon egg and cheese sandwiches{' '}
            <a href="https://dylansteck.com" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
              i
            </a>{' '}
            eat
            <br/>
            the design is heavily inspired by{' '}
            <a href="https://consumed.today" style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
              consumed.today
            </a>
          </p>
        </details>
        <div className="mt-6 space-y-2">
          {DAY_CONTENT.map((content, index) => (
            <details className="day" key={index}>
              <summary className="date cursor-default">
                {content.date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                }).toLowerCase().replace(',', '')}
              </summary>
              {content.sandwich && content.sandwich.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-default">sandwich</summary>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {content.sandwich.map((item) => (
                      <img
                        key={item.id}
                        loading="lazy"
                        src={item.imageUrl}
                        alt={item.description}
                      />
                    ))}
                  </div>
                </details>
              )}
              {content.rating && content.rating.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-default">rating</summary>
                  <div className="mt-4 mb-4">
                    {content.rating.map((item, i) => (
                      <div key={i} className="text-inherit text-sm m-0 p-0 flex flex-col items-center">
                        <div className="flex mb-2">
                          {renderStars(item.rating)}  
                        </div>
                        <p className="text-inherit text-sm m-0 p-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </details>
              )}
              {content.location && content.location.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-default">location</summary>
                  <div className="mt-2">
                    {content.location.map((item, i) => (
                      <div key={i} className="text-inherit text-sm m-0 p-0">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </details>
          ))}
        </div>
      </div>
    </main>
  )
}