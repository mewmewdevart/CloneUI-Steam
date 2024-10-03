import bannerImage1 from '@assets/banner01.png';
import logoImage1 from '@assets/logo-banner01.png';

import bannerImage2 from '@assets/banner02.png';
import logoImage2 from '@assets/logo-banner02.png';

export interface Game {
    id: number;
    imageCarousel: string;
    logoCarousel: string;
    labelCarousel: string;
}

const dataGames: Game[] = [
    {
        id: 1,
        imageCarousel: bannerImage1,
        logoCarousel: logoImage1,
        labelCarousel: "United States, 1899. The end of the Old West era has begun, and authorities are hunting down the last remaining outlaw gangs. Those who do not surrender or succumb are killed."
    },
    {
        id: 2,
        imageCarousel: bannerImage2,
        logoCarousel: logoImage2,
        labelCarousel: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and ..."
    }
];

export default dataGames;
