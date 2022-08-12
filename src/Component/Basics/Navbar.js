import React from 'react'

const Navbar = ({filteritem, UniqueList}) => {
  return (
    <>
        <nav className='navbar'>
        <div className='btn-group'>
            {
               UniqueList.map((currElem) => {
                    return (
                        <button className='btn-group__item' onClick={() => filteritem(currElem)}>{currElem}</button>
                    )
                })
            }
            
            {/* <button className='btn-group__item'onClick={() => filteritem("lunch")}>lunch</button>
            <button className='btn-group__item' onClick={() => filteritem("evening")}>evening</button>
            <button className='btn-group__item'onClick={() => filteritem("dinner")}>dinner</button>
            <button className='btn-group__item'onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar;