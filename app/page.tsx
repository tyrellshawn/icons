import React from 'react';
import { Card, CardActions, CardTitle } from '@/components/card';
import { importIcons } from '@/lib/icon-import';

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
        <div className="grid my-20 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[minmax(150px,auto)] gap-3">
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
  );
}
