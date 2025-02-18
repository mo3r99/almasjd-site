import Image from 'next/image';
import {Play} from 'lucide-react'
import { Button } from '@/components/ui/button';

const Album = ({ title, artist, coverUrl }) => {
    return (
        <div className="group relative cursor-pointer transition-all rounded-md">
            <div className="relative aspect-square w-full mb-4">
                <Image
                    src={coverUrl || '/default-album.png'}
                    alt={`${title} cover`}
                    className="object-cover rounded-md shadow-lg"
                    fill
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 15vw"
                />
                <Button 
                    className="absolute bottom-2 right-2 p-1 rounded-full aspect-square bg-background hover:bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <Play className='text-neutral-700 p-0 m-0'/>
                </Button>
            </div>
            <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground truncate">{artist}</p>
            </div>
        </div>
    );
};

export default Album;