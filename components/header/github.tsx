'use client';

import { useOpenPanel } from '@openpanel/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LINK } from '@/constants';
import { ANALYTIC_EVENT } from '../analytics';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ArrowUpRight } from 'lucide-react';

const HeaderGithub = () => {
  const op = useOpenPanel();

  return (
    <Button variant="outline" asChild>
      <Link
        href={LINK.GITHUB}
        target="_blank"
        onClick={() => op.track(ANALYTIC_EVENT.HEADER_GITHUB)}
      >
        <GitHubLogoIcon />
        check repo
        <ArrowUpRight className="w-4 h-4 sm:ml-1 ml-0 text-muted-foreground" />
      </Link>
    </Button>
  );
};

export { HeaderGithub };
