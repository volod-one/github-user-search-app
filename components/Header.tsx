import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

type Props = {
  setTheme: Function
  mounted: boolean
  theme?: string
  systemTheme?: string
}

const Header = ({ setTheme, mounted, theme, systemTheme }: Props) => {
  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <button
          className="flex items-center gap-4 font-bold transition-colors cursor-pointer dark:text-white dark:hover:text-clr-header-dark-active text-clr-primary group hover:text-clr-body"
          onClick={() => {
            setTheme('light')
          }}
        >
          <span className=" text-sm tracking-[.2em] uppercase">light</span>
          <FontAwesomeIcon icon={faSun} size="lg" />
        </button>
      )
    } else {
      return (
        <button
          className="flex items-center gap-4 font-bold transition-colors cursor-pointer dark:text-white dark:hover:text-clr-header-dark-active text-clr-primary group hover:text-clr-body"
          onClick={() => {
            setTheme('dark')
          }}
        >
          <span className=" text-sm tracking-[.2em] uppercase">dark</span>
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </button>
      )
    }
  }

  return (
    <header className="flex items-center justify-between">
      {/* title / logo */}
      <h1 className="text-clr-body dark:text-white text-[1.625rem] font-bold">
        <a href="./">devfinder</a>
      </h1>
      {/* title / logo */}

      {/* theme-button */}
      {renderThemeChanger()}
      {/* theme-button */}
    </header>
  )
}

export default Header
