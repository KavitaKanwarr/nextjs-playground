import Link from "next/link"

const Header = () => {
    return <nav className="flex justify-center bg-pink-200 p-3 [&>a]:py-2 [&>a]:px-4 [&>a]:text-pink-800 [&>a]:hover:bg-pink-800 [&>a]:hover:text-white [&>a]:transition [&>a]:duration-400 shadow-md shadow-gray-400/50">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </nav>
}
export default Header