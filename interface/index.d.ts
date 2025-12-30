interface NavbarLinksProps {
  label:string,
  sublinks: {
    label: string,
    link: string,
  }[]
}

interface IconProps {
  size?: number,
  color?: string,
  style?: string
}

interface IconButtonProps {
  label: string,
  icon: React.ReactNode,
  style?: string,
  handleClick?: any,
  isLink: boolean,
  url?: string,
}

interface CarouselConfig {
  itemsPerView: number;
  scrollBy: number;
  slideWidth: number;
  gap?: number;
  infinite: boolean;
  autoPlay: boolean;
  showDots?: boolean;
  showButtons?: boolean;
  autoPlayInterval?: number;
}

interface CarouselButtonProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
  prevButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
  type?: 'prev' | 'next';
}

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: number;
  scrollBy?: number;
  slideWidth?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infinite?: boolean;
  showDots?: boolean;
  showButtons?: boolean;
  className?: string;
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface CardWithImageProps {
  title: string
  paragraf?: string
  image: string
  href?: string
  alt?: string
  dimension?: string
  ariaLabel?: string
  variant?: 'default' | 'large' | 'featured' | 'compact'
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'auto'
  overlayIntensity?: 'light' | 'medium' | 'dark'
  showBadge?: boolean
  badgeText?: string
  metadata?: string
}

interface ArticleCardProps {
  title: string, 
  image: string,
  images?: string[],
  date?: string, 
  href: string, 
  alt: string, 
  ariaLabel?: string,
  dimension?: string
}

interface GridItem {
  id: string
  component: ReactNode
  span?: {
    row?: number
    col?: number
  }
  area?: string
  order?: number
  className?: string
}

interface AdvancedGridProps {
  items: GridItem[]
  columns?: number
  gap?: number
  className?: string
  layout?: 'masonry' | 'grid' | 'flexible' | 'custom'
  autoFit?: boolean
  minChildWidth?: string
  autoRows?: string
}

interface TourPackage {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  description: string;
  price: {
    perPerson: number;
    groupDiscount?: number; // untuk 4 orang atau lebih
    includes: string[];
    excludes: string[];
  };
  duration: {
    days: number;
    nights: number;
    dailySchedule: string[];
  };
  transportation: {
    type: string;
    description: string;
    capacity: number;
  };
  accommodation: {
    type: string;
    description: string;
    specialFeature?: string;
  };
  highlights: string[];
  inclusions: string[];
  themeTags: string[];
  recommendedFor: string[];
  personalNoteFromTama: string;
}

interface UtilityStore {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

interface CarouselState {
  currentIndex: number;
  isTransitioning: boolean;
  setCurrentIndex: (index: number) => void;
  setIsTransitioning: (transitioning: boolean) => void;
}

interface CongratulationsMessage {
  id?: string;
  name: string;
  profilePic?: string;
  title: string;
  organization: string;
  ucapan: string;
  date: string;
  relation?: string;
  quote?: string;
  isFeatured?: boolean;
  socialMedia?: {
    platform: string;
    username: string;
  };
}