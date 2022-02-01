type Props = {
  name: string
  link: string
  linkTitle: string
  date: string
}

const UserHeader = ({ name, link, linkTitle, date }: Props) => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row md:justify-between">
      <div>
        <p className="text-base font-bold sm:text-[1.625rem] text-clr-heading dark:text-clr-content-light">
          {name}
        </p>
        <a
          href={link}
          className="text-[0.812rem] sm:text-base text-clr-accent mt-1"
          target="_blank"
          rel="noreferrer"
        >
          @{linkTitle}
        </a>
      </div>
      <div>
        <span className="text-clr-secondary dark:text-clr-content-light text-[0.812rem] sm:text-[0.937rem]">
          Joined 25 Jan 2011
        </span>
      </div>
    </div>
  )
}

export default UserHeader
