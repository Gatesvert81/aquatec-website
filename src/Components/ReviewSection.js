import React from 'react'
import Button from './Button'
import ReviewCard from './ReviewCard'
import SectionHead from './SectionHead'

function ReviewSection() {
    return (
        <section className='bg-light-white' >
            <div>
                <SectionHead>
                    What our clients say
                </SectionHead>
                <div className='hidden' >
                    <Button>
                        prev
                    </Button>
                    <Button>
                        next
                    </Button>
                </div>
            </div>
            <div className='w-full h-fit overflow-x-scroll gap-5 flex justify-start flex-nowrap no-scrollbar py-5' >
                <ReviewCard
                    title="Movinpick Hotel"
                    name="Henvy steve"
                >
                    Great Pool and it has lasted for years. Glad I chose Aquatec.
                </ReviewCard>
                <ReviewCard
                    title="Local Guide"
                    name="Bamidele Owoyele"
                >
                    The Aquatec Services Limited is a standard laboratory with serene environment.The practices are standard compared with what obtains in good laboratories. The interior of the laboratory is cool. The staff are friendly and professional.
                </ReviewCard>
                <ReviewCard
                    title="Local Customer"
                    name="Vidic Dzyan"
                >
                    Aquatec is ur number one stop home for all ur pool needs. They sell pool pumps, filters, skimmers, lights, tiles, anti-algi solutions and all pool plumbing fittings except 2&quot; pressure pipes. They are the best.
                </ReviewCard>
                <ReviewCard
                    title="Local Customer"
                    name="Carmen Gabriel Avle"
                >
                    Had an issue here, but it was amicably resolved.
                </ReviewCard>
            </div>
        </section>
    )
}

export default ReviewSection