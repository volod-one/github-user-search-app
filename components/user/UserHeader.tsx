type Props = {
  name: string
  link: string
  linkTitle: string
  date: string
}

const UserHeader = ({ name, link, linkTitle, date }: Props) => {
  const userDate = new Date(date)
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

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
          {'Joined' +
            ' ' +
            userDate.getDate() +
            ' ' +
            month[userDate.getMonth()] +
            ' ' +
            userDate.getFullYear()}
        </span>
      </div>
    </div>
  )
}

export default UserHeader
