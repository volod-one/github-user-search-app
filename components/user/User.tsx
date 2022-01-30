/* eslint-disable @next/next/no-img-element */
import UserBio from './UserBio'
import UserHeader from './UserHeader'
import UserInfo from './UserInfo'
import UserStats from './UserStats'

type Props = {
  user: object | undefined
}

const User = ({ user = undefined }: Props) => {
  return (
    <div className="px-6 pt-8 pb-12 shadow-xl sm:p-10 md:p-12 bg-clr-content-light dark:bg-clr-content-dark rounded-2xl">
      <div
        className="grid gap-4 sm:gap-y-8 lg:gap-y-5 md:grid-cols-4 sm:gap-0 xs:grid-cols-3"
        //  className="grid gap-4 xs:grid-cols-4 xs:gap-y-8 sm:gap-y-6 md:gap-9 md:grid-cols-9"
      >
        {/* avatar */}
        <div className="lg:row-span-2">
          <img
            className="mx-auto rounded-full aspect-square xs:m-0 max-w-[4.375rem] sm:max-w-[7.313rem]"
            src="https://via.placeholder.com/120"
            alt=""
          />
        </div>
        {/* avatar */}

        {/* header */}
        <div
          className="xs:col-span-full xs:col-start-2"
          //  className="col-start-3 col-span-full"
        >
          <UserHeader name="Name" link="link" date="date" />
        </div>
        {/* header */}

        {/* content */}
        <div className="xs:col-span-full lg:col-start-2">
          <div className="grid gap-6 sm:gap-8">
            <UserBio text={undefined} />

            <UserStats repos={0} followers={0} following={0} />

            <UserInfo
              location={undefined}
              twitter={undefined}
              site={undefined}
              organization="orgLink"
            />
          </div>
        </div>
        {/* content */}
      </div>
    </div>
  )
}

export default User
