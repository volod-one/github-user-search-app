type Props = {
  text: string | undefined
}

const UserBio = ({ text }: Props) => {
  return (
    <p className="text-[0.812rem] sm:text-[0.937rem] leading-6 text-clr-primary dark:text-clr-content-light">
      {text ? text : 'This profile has no bio'}
    </p>
  )
}

export default UserBio
