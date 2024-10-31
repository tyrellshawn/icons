import Link from 'next/link';
import { LINK } from '@/constants';

const Footer = () => {
  return (
    <footer className="py-4 font-mono">
      <div className="container w-full flex items-center justify-end h-full">
        <p className="text-sm text-muted-foreground">
          icons by{' '}
          <Link
            href={LINK.LUCIDE}
            className="underline underline-offset-2 cursor-pointer transition-all hover:text-primary"
          >
            lucide
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export { Footer };
