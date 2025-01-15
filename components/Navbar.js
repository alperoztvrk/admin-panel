import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><Link href="/admin">Dashboard</Link></li>
        <li><Link href="/admin/settings">Settings</Link></li>
        <li><Link href="/admin/users">Users</Link></li>
        <li><Link href="/admin/transactions">Transactions</Link></li>
        <li><Link href="/admin/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
