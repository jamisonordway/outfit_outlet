import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href='/sell'>
      <a>Sell Stuff</a>
    </Link>
    <Link href='/index'>
      <a>Go back to homepage</a>
    </Link>
  </div>
)

export default Nav;