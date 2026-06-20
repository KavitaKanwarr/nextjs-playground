import Link from "next/link"

const Header = () => {
    return (
      <nav className="flex justify-center bg-pink-200 p-3 [&>a]:py-2 [&>a]:px-4 [&>a]:text-pink-800 [&>a]:hover:bg-pink-800 [&>a]:hover:text-white [&>a]:transition [&>a]:duration-400 shadow-md shadow-gray-400/50">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* <Link href="/optionalCatchAllRoute">Opt Catch All Route</Link>
        <Link href="/optionalCatchAllRoute/anything">
          Opt Catch All Route - 1 level
        </Link>
        <Link href="/optionalCatchAllRoute/anything/nested">
          Opt Catch All Route - 2 level
        </Link>
        <Link href="/catchAllRoute">Catch All Route</Link>
        <Link href="/catchAllRoute/anything">Catch All Route - 1 level</Link>
        <Link href="/catchAllRoute/anything/nested">
          Catch All Route - 2 level
        </Link> */}
      </nav>
    );
}
export default Header