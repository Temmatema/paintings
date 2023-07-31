import React, { useContext, useState } from 'react'
import { Context } from '../../../context'
import { ReactComponent as Close } from '../../../img/close.svg'
import { apiPaintings } from '../../../utils/api'
import FilterButton from '../FilterButton/FilterButton'
import LocationSelect from './LocationSelect/LocationSelect'
import OutsideClickHandler from 'react-outside-click-handler/esm/OutsideClickHandler'

const FilterLocation = () => {
  const [isActive, setIsActive] = useState(false)
  const [locName, setLocName] = useState('')
  const { locations, setPaintings, setTotalPages, setPage } = useContext(Context)

  function clearSelect() {
    setLocName('')
    updatePaintings(null)
  }

  function locationSelect(el) {
    setLocName(el.location)
    setIsActive(false)
    updatePaintings(el.id)
  }

  function updatePaintings(locationId) {
    apiPaintings({ locationId, _page: 1 }).then((res) => {
      setPage(1)
      setTotalPages(res.headers['x-total-count'])
      setPaintings(res.data)
    })
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setIsActive(false)}>
      <div className='filter__field filter-location filter-select'>
        <FilterButton isActive={isActive} onClick={() => setIsActive(!isActive)} buttonText={locName || 'Location'} />
        {locName !== '' && (
          <button className='filter__clear' onClick={clearSelect}>
            <Close />
          </button>
        )}

        <LocationSelect isActive={isActive} locations={locations} onSelect={locationSelect} />
      </div>
    </OutsideClickHandler>
  )
}

export default FilterLocation
