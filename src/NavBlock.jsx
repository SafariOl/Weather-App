import React, { useLayoutEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 

export default function NavBlock({setLocation}) {
  const locRef = useRef(null)
  useLayoutEffect(() => {
    const input = document.querySelector('input').value = 'Ukraine'
    return setLocation(input)
  }, [])
    const handleSubmit = (e) => {
      e.preventDefault()
      return setLocation(locRef.current.value)
    }

  return (
    <div className='current-day'>
        <div className="logo">weatherio</div>
        <form onSubmit={handleSubmit}>
          <input ref={locRef} type="text" placeholder='Type Any Location...'/>
        </form>
        <FontAwesomeIcon className='search' icon={faMagnifyingGlass} />
        <button type='button' onClick={handleSubmit}>
        <FontAwesomeIcon icon={faLocationCrosshairs} /><p>SEARCH</p></button>
    </div>
  )
}
