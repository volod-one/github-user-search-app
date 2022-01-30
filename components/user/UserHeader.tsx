type Props = {
  name: string
  link: string
  date: string
}

const UserHeader = ({ name, link, date }: Props) => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row md:justify-between">
      <div>
        <p className="text-base font-bold sm:text-[1.625rem] text-clr-heading dark:text-clr-content-light">
          {name}
        </p>
        <p className="text-[0.812rem] sm:text-base text-clr-accent mt-1">
          @{link}
        </p>
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
