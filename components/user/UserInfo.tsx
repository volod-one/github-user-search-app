import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  location: string | null
  twitter: string | null
  site: string
  organization: string | null
}

const UserInfo = ({
  location = null,
  twitter = null,
  site,
  organization = null,
}: Props) => {
  return (
    <div className="grid items-center gap-4 sm:grid-cols-2">
      {/* location */}
      <p
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          !location && 'opacity-50'
        }`}
      >
        <div>
          <FontAwesomeIcon icon={['fas', 'location-dot']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {location ? location : 'Not Available'}
        </span>
      </p>
      {/* location */}

      {/* twitter */}
      <a
        href={twitter ? 'https://twitter.com/' + twitter : '#'}
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          !twitter && 'opacity-50'
        }`}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          @{twitter ? twitter : 'Not Available'}
        </span>
      </a>
      {/* twitter */}

      {/* site */}
      <a
        href={site.length > 0 ? site : '#'}
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          site.length === 0 && 'opacity-50'
        }`}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FontAwesomeIcon icon={['fas', 'link']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {site.length > 0 ? site : 'Not Available'}
        </span>
      </a>
      {/* site */}

      {/* organization */}
      <a
        href={
          organization ? 'https://github.com/' + organization.slice(1) : '#'
        }
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          !organization && 'opacity-50'
        }`}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FontAwesomeIcon icon={['fas', 'building']} size="lg" />
        </div>
        <span className="col-start-2 col-span-full">
          {organization ? organization : 'Not Available'}
        </span>
      </a>
      {/* organization */}
    </div>
  )
}

export default UserInfo
