import Link from 'next/link';
import { ModeToggle } from '../ui/theme-toggle';
import { Button } from '../ui/button';
import { LINK } from '@/constants';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 font-mono">
      <div className="container w-full flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-base">pqoqubbw/icons</h1>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" asChild>
            <Link href={LINK.GITHUB} target="_blank">
              <GitHubLogoIcon />
              check repo
              <ArrowUpRight className="w-4 h-4 ml-1 text-muted-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
