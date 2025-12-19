interface GridItem {
  children: React.ReactNode
  span: 1 | 2 | 3 | 4 | 'full'
  height: string
  className: string
}

export const GridItem = ({ children, span = 1, height = 'auto', className = '' }:GridItem) => {
  const spanClasses: Record<1 | 2 | 3 | 4 | 'full', string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    'full': 'col-span-full'
  };

  const heightClasses: Record<string, string> = {
    'auto': 'h-auto',
    'small': 'h-40 md:h-48',
    'medium': 'h-48 md:h-60',
    'large': 'h-60 md:h-80',
    'xlarge': 'h-80 md:h-96'
  };

  return (
    <div className={`${spanClasses[span]} ${heightClasses[height]} ${className}`}>
      {children}
    </div>
  );
};