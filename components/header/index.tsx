import Link from 'next/link';
import { ModeToggle } from '../ui/theme-toggle';

const Header = () => {
  return (
    <header className="py-4 font-mono">
      <div className="container w-full flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-base">pqoqubbw/icons</h1>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export { Header };
