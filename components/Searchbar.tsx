import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearSearchError } from '../state/reducers/app'
type Props = {
  error: boolean
  action: Function
}

// Need to fix clear error reducer

const Searchbar = ({ action, error }: Props) => {
  const [value, setValue] = useState('')
  console.log(error)
  const dispatch = useDispatch()

  const showError = () => {
    if (error) {
      return (
        <p className="absolute right-0 text-sm font-bold -translate-y-1/2 sm:text-base text-clr-error top-1/2 bg-clr-content-light dark:bg-clr-content-dark">
          No results
        </p>
      )
    }
  }

  useEffect(() => {
    showError()
  }, [error])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearSearchError())
    }, 4000)
    return () => clearTimeout(timer)
  }, [error])

  const inputHandler = (e: any) => {
    setValue(e.target.value)
  }

  return (
    <form
      /* refactor later */
      onSubmit={(e) => {
        e.preventDefault()
        action(value)
      }}
      /* refactor later */

      className="flex items-center w-full gap-2 p-2 sm:p-2.5 overflow-hidden shadow-xl bg-clr-content-light dark:bg-clr-content-dark rounded-2xl"
    >
      {/* search field */}
      <div className="relative flex items-center flex-grow gap-2 p-2">
        <FontAwesomeIcon
          icon={['fas', 'search']}
          className="text-xl sm:text-2xl text-clr-accent"
        />

        <div className="flex-grow overflow-hidden">
          <label>
            <input
              className="w-full text-xs bg-transparent sm:text-lg placeholder:text-clr-primary dark:placeholder:text-white focus:outline-none caret-clr-accent dark:bg-clr-content-dark"
              value={value}
              type="text"
              name="search"
              placeholder="Search GitHub username…"
              onChange={inputHandler}
            />
          </label>
        </div>

        {showError()}
      </div>
      {/* search field */}

      {/* button */}
      <button
        className="px-4 sm:px-6 py-3 text-sm font-bold text-white transition-colors rounded-[0.625rem] bg-clr-accent hover:bg-clr-accent-active"
        type="submit"
      >
        Search
      </button>
      {/* button */}
    </form>
  )
}

export default Searchbar
