import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import Button from './Button'

function Searchbox({ currentRefinement, refine, setSearchFocus }) {
    return (
        <form 
            noValidate 
            onSubmit={(e) => e.preventDefault()} 
            role="search"
            className=' flex flex-col md:flex-row md:justify-between md:items-end gap-2' >
            <fieldset>
                <label>
                    Search A product
                </label>
                <input
                    type="search"
                    value={currentRefinement}
                    onFocus={() => setSearchFocus(true)}
                    className="md:w-full"
                    onChange={(e) => refine(e.currentTarget.value)}
                />
            </fieldset>
            <fieldset>
                <Button
                    click={() => refine('')}
                    style="primary-btn w-full md:w-fit"
                >
                    Search
                </Button>
            </fieldset>
        </form>
    )
}

const CustomSearchBox = connectSearchBox(Searchbox)

export default CustomSearchBox