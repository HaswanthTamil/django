"use client"

interface HeaderProps {
  setIsVisible: (value: boolean) => void
  searchQuery: string
  setSearchQuery: (value: string) => void
}

const Header: React.FC<HeaderProps> = ({
  setIsVisible,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <>
      <header className="flex p-5 items-center justify-center w-full gap-3">
        <div className="search text-white border border-gray-500 rounded-lg p-1 px-3 flex w-lg">
          <input
            className="p-1 rounded-md outline-none flex-grow"
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <button
            className="p-1 border border-transparent rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#00cc9e] text-white"
            onClick={() => setIsVisible(true)}
          >
            Add Task
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
