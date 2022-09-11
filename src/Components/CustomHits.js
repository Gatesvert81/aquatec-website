import React from 'react'
import { connectHits } from 'react-instantsearch-dom'

function Hits({ hits }) {
    return (
        <div>
            {
                hits.map((hit) => (
                    <div 
                        key={hit.objectID} 
                        className="w-full h-fit rounded-md p-5"
                        >
                        <h4>
                            Category: {hit.category}
                        </h4>
                        <div className="w-full" >
                            {
                                hit?.products?.map((product, index) => (
                                        <p key={index}>
                                            {product}
                                        </p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
const CustomHits = connectHits(Hits)
export default CustomHits