'use client';

import * as React from 'react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { X } from 'lucide-react';
import Link from 'next/link';
import { LINK } from '@/constants';

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <div className="fixed right-3 bottom-3 text-sm text-muted-foreground">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem asChild>
              <Link href={LINK.GITHUB} target="_blank">
                <GitHubLogoIcon />
                <span>github</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link href={LINK.TWITTER} target="_blank">
                <X />
                <span>twitter</span>
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
