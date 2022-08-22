import React from 'react'
import Button from './Button'
import ReviewCard from './ReviewCard'
import SectionHead from './SectionHead'

function ReviewSection() {
    return (
        <section>
            <div>
                <SectionHead>
                    What our clients say
                </SectionHead>
                <div>
                    <Button>
                        prev
                    </Button>
                    <Button>
                        next
                    </Button>
                </div>
            </div>
            <div>
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