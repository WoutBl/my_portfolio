
import { IconType } from 'react-icons/lib'

export default ({
  icon: Icon,
  title,
  color,
}: {
  icon?: IconType
  title: string
  color: string
}) => {
  return (
    
    <div className=" flex h-full items-center  rounded-own-md bg-own-neutral-100 px-5 py-4 dark:bg-own-neutral-700 lg:space-x-3 lg:rounded-3xl lg:px-6 lg:py-5  xl:space-x-4 xl:rounded-own-lg xl:px-7 xl:py-6">
        {Icon && (
            <Icon
            className={`h-5 w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7`}
            style={{ color: color }}
            />
        )}
        <p className="whitespace-nowrap text-base font-semibold text-own-neutral-700 dark:text-own-neutral-300 lg:text-lg xl:text-xl">
            {title}
        </p>
    </div>
    
  )
}
