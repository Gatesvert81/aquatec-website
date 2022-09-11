import React from 'react'
import { connectHits } from 'react-instantsearch-dom'
import AnchorLink from './AnchorLink'

function Hits({ hits }) {
    return (
        <div>
            {
                hits.map((hit, index) => (
                    <AnchorLink 
                        route={`/${hit.category}`}
                        key={`${hit.category} ${index}`}
                         >
                        <div
                            
                            className="w-full h-fit rounded-md p-5 cursor-pointer"
                        >
                            <h4>
                                Category: {hit.category}
                            </h4>
                        </div>
                    </AnchorLink>
                ))
            }
        </div>
    )
}
// {/* <div className="w-full" >
//                             {
//                                 hit?.products?.map((product, index) => (
//                                         <p key={index}>
//                                             {product}
//                                         </p>
//                                 ))
//                             }
//                         </div> */}
const CustomHits = connectHits(Hits)
export default CustomHits