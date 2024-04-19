import React from 'react'

const SearchList = ({search,SetSearch}) => {
  return (
    <>
        <form className='searchForm'  onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search"> Search</label>
            <input type="text"
            id="search"
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e)=>SetSearch(e.target.value)}
            />

        </form>
    </>
  )
}

export default SearchList
