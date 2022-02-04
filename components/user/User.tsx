/* eslint-disable @next/next/no-img-element */
import UserBio from './UserBio'
import UserHeader from './UserHeader'
import UserInfo from './UserInfo'
import UserStats from './UserStats'

type Props = {
  login: string
  avatar_url: string
  bio: string
  company: string
  html_url: string
  created_at: string
  twitter_username: string
  location: string
  blog: string
  public_repos: number
  followers: number
  following: number
}

const User = ({
  login,
  avatar_url,
  bio,
  company,
  html_url,
  created_at,
  public_repos,
  followers,
  following,
  location,
  twitter_username,
  blog,
}: Props) => {
  return (
    <div className="px-6 pt-8 pb-12 shadow-xl sm:p-10 md:p-12 bg-clr-content-light dark:bg-clr-content-dark rounded-2xl">
      <div className="grid gap-4 sm:gap-y-8 lg:gap-y-5 md:grid-cols-4 sm:gap-0 xs:grid-cols-3">
        {/* avatar */}
        <div className="lg:row-span-2">
          <img
            className="mx-auto rounded-full aspect-square xs:m-0 max-w-[4.375rem] sm:max-w-[7.313rem]"
            src={avatar_url}
            alt=""
          />
        </div>
        {/* avatar */}

        {/* header */}
        <div className="xs:col-span-full xs:col-start-2">
          <UserHeader
            name={login}
            link={html_url}
            linkTitle={login}
            date={created_at}
          />
        </div>
        {/* header */}

        {/* content */}
        <div className="xs:col-span-full lg:col-start-2">
          <div className="grid gap-6 sm:gap-8">
            <UserBio text={bio} />

            <UserStats
              repos={public_repos}
              followers={followers}
              following={following}
            />

            <UserInfo
              location={location}
              twitter={twitter_username}
              site={blog}
              organization={company}
            />
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  )
}

export default User
