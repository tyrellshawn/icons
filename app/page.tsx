import React from 'react';

import { Card, CardActions, CardTitle } from '@/components/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LINK } from '@/constants';
import { importIcons } from '@/lib/icon-import';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const icons = await importIcons();

  return (
    <div className="font-mono flex items-center justify-center mt-16">
      <div className="container">
        <h1 className="sm:text-3xl text-2xl mt-3 text-balance">
          beautifully crafted animated icons
        </h1>
        <p className="sm:text-sm text-xs sm:mt-4 mt-2 text-muted-foreground max-w-lg text-pretty">
          an open-source collection of smooth animated icons for your projects.
          feel free to use them, share your feedback, and let&apos;s make this
          library awesome together.
        </p>
        <div className="my-20 flex flex-col gap-6">
          <div className="flex items-center justify-between sm:gap-4 gap-2 sm:flex-row flex-col">
            <Input
              className="w-full md:max-w-[60%]"
              placeholder={`Search ${icons.length} icons...`}
            />
            <Button variant="outline" asChild className="sm:w-fit w-full">
              <Link href={LINK.GITHUB} target="_blank">
                <GitHubLogoIcon />
                check repo
                <ArrowUpRight className="w-4 h-4 ml-1 text-muted-foreground" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[minmax(150px,auto)] gap-3">
            {icons.map(({ Icon, ...icon }) => (
              <Card key={icon.title}>
                <Icon />
                <CardTitle>{icon.title}</CardTitle>
                <CardActions {...icon} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
