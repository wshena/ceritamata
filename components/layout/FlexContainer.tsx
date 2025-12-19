interface FlexContainerProps {
  children: React.ReactNode;
  direction?: string;
  gap?: 2 | 3 | 4 | 5 | 6;
  wrap?: boolean;
  className?: string;
}

export const FlexContainer = ({ 
  children, 
  direction = 'row',
  gap = 4,
  wrap = false,
  className = '' 
}: FlexContainerProps) => {

  // const directionClasses = {
  //   row: 'flex-row',
  //   col: 'flex-col',
  //   'row-reverse': 'flex-row-reverse',
  //   'col-reverse': 'flex-col-reverse',
  // };

  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6'
  };

  return (
    <div className={`
      flex ${direction} ${gapClasses[gap]} 
      ${wrap ? 'flex-wrap' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};