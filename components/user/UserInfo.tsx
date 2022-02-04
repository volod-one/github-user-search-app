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
      <div
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white ${
          !location ? 'opacity-50 cursor-default' : ''
        }`}
      >
        <span>
          <FontAwesomeIcon icon={['fas', 'location-dot']} size="lg" />
        </span>
        <span className="col-start-2 col-span-full">
          {location ? location : 'Not Available'}
        </span>
      </div>
      {/* location */}

      {/* twitter */}
      <a
        href={twitter ? 'https://twitter.com/' + twitter : '#'}
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white   sm:order-3 order-3  ${
          !twitter ? 'opacity-50 cursor-default' : ' hover:underline'
        }`}
        onClick={(e) => {
          !twitter && e.preventDefault()
        }}
        title={twitter ? `https://twitter.com/${twitter}` : 'empty'}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
        </span>
        <span className="col-start-2 col-span-full">
          {twitter ? '@' + twitter : 'Not Available'}
        </span>
      </a>
      {/* twitter */}

      {/* site */}
      <a
        href={site.length > 0 ? site : '#'}
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white    sm:order-3 order-2  ${
          site.length === 0 ? 'opacity-50 cursor-default' : ' hover:underline'
        }`}
        onClick={(e) => {
          site.length <= 0 && e.preventDefault()
        }}
        title={site.length > 0 ? site : 'empty'}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <FontAwesomeIcon icon={['fas', 'link']} size="lg" />
        </span>
        <span className="col-start-2 col-span-full">
          {site.length > 0 ? site : 'Not Available'}
        </span>
      </a>
      {/* site */}

      {/* organization */}
      <div
        className={`grid grid-cols-7 gap-4 overflow-hidden text-clr-primary text-[0.812rem] sm:text-[0.937rem] dark:text-white order-4 ${
          !organization ? 'opacity-50' : ''
        }`}
        title={organization ? organization : 'empty'}
      >
        <span>
          <FontAwesomeIcon icon={['fas', 'building']} size="lg" />
        </span>
        <span className="col-start-2 col-span-full">
          {organization ? organization : 'Not Available'}
        </span>
      </div>
      {/* organization */}
    </div>
  )
}

export default UserInfo
