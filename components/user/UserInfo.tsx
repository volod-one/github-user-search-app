import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  location: string | undefined
  twitter: string | undefined
  site: string | undefined
  organization: string | undefined
}

const UserInfo = ({
  location = undefined,
  twitter = undefined,
  site = undefined,
  organization = undefined,
}: Props) => {
  return (
    <div className="grid items-center gap-4 sm:grid-cols-2">
      <a
        href="#"
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          location === undefined && 'opacity-50'
        }`}
      >
        <div>
          <FontAwesomeIcon icon={['fas', 'location-dot']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {location ? location : 'Not Available'}
        </span>
      </a>

      <a
        href="#"
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          twitter === undefined && 'opacity-50'
        }`}
      >
        <div>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {twitter ? twitter : 'Not Available'}
        </span>
      </a>

      <a
        href="#"
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          site === undefined && 'opacity-50'
        }`}
      >
        <div>
          <FontAwesomeIcon icon={['fas', 'link']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {site ? site : 'Not Available'}
        </span>
      </a>

      <a
        href="#"
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          organization === undefined && 'opacity-50'
        }`}
      >
        <div>
          <FontAwesomeIcon icon={['fas', 'building']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {organization ? organization : 'Not Available'}
        </span>
      </a>
    </div>
  )
}

export default UserInfo
