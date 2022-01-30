type Props = {
  repos: number
  followers: number
  following: number
}

const UserStats = ({ repos, followers, following }: Props) => {
  return (
    <div className="w-full bg-clr-section-light dark:bg-clr-section-dark rounded-[0.675rem] grid p-4 xs:grid-cols-3 text-center sm:px-8 sm:text-left">
      <div className="grid gap-2">
        <h3 className="text-[0.687rem] sm:text-sm text-clr-primary dark:text-white">
          Repos
        </h3>
        <span className="text-base font-bold text-clr-heading dark:text-white text-[1.375rem]">
          {repos}
        </span>
      </div>
      <div className="grid gap-2">
        <h3 className="text-[0.687rem] sm:text-sm text-clr-primary dark:text-white">
          Followers
        </h3>
        <span className="text-base font-bold text-clr-heading dark:text-white text-[1.375rem]">
          {followers}
        </span>
      </div>
      <div className="grid gap-2">
        <h3 className="text-[0.687rem] sm:text-sm text-clr-primary dark:text-white">
          Following
        </h3>
        <span className="text-base font-bold text-clr-heading dark:text-white text-[1.375rem]">
          {following}
        </span>
      </div>
    </div>
  )
}

export default UserStats
