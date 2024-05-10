import Link from "next/link"
import FeedbackButton from "../feeback-button"

function Header() {
  return (
    <header className="bg-gray-900 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="text-white font-bold text-xl" href="/">
          Commission Hub
        </Link>
      </div>
      <FeedbackButton />
    </header>
  )
}


export default Header