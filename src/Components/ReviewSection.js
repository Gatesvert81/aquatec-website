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
                    position="Ceo"
                >
                    Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations.
                </ReviewCard>
                <ReviewCard
                    title="Movinpick Hotel"
                    name="Henvy steve"
                    position="Ceo"
                >
                    Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations.
                </ReviewCard>
                <ReviewCard
                    title="Movinpick Hotel"
                    name="Henvy steve"
                    position="Ceo"
                >
                    Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations.
                </ReviewCard>
                <ReviewCard
                    title="Movinpick Hotel"
                    name="Henvy steve"
                    position="Ceo"
                >
                    Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations.
                </ReviewCard>
                <ReviewCard
                    title="Movinpick Hotel"
                    name="Henvy steve"
                    position="Ceo"
                >
                    Drive performace and our cross-functional colaboration with easy-to-use dashboards, data visualizations.
                </ReviewCard>
            </div>
        </section>
    )
}

export default ReviewSection