import { promises as fs } from 'fs';
import path from 'path';

type IconType = {
  title: string;
  Icon: React.ElementType;
  content: string;
  fileName: string;
};

async function importIcons(): Promise<IconType[]> {
  const iconsDirectory = path.join(process.cwd(), 'icons');
  const iconFiles = await fs.readdir(iconsDirectory);

  const icons = await Promise.all(
    iconFiles.map(async (file) => {
      const name = path.parse(file).name;
      const iconModule = await import(`../icons/${file}`);
      const Icon = iconModule[Object.keys(iconModule)[0]];
      const content = await fs.readFile(
        path.join(iconsDirectory, file),
        'utf8'
      );

      return {
        title: name,
        Icon,
        content,
        fileName: file,
      };
    })
  );

  return icons;
}

export type { IconType };
export { importIcons };
