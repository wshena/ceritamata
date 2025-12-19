interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

interface CardColumnProps {
  children: React.ReactNode;
  gap?: 2 | 3 | 4 | 5;
  className?: string;
}

interface CardRowProps {
  children: React.ReactNode;
  gap?: 2 | 3 | 4 | 5;
  className?: string;
}

export const CardGrid = ({ 
  children, 
  columns = 2, 
  gap = 4,
  className = '' 
}:CardGridProps) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-4'
  };

  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6'
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export const CardColumn = ({ children, gap = 2, className = '' }: CardColumnProps) => {
  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5'
  };

  return (
    <div className={`flex flex-col ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

// ==================== CARD ROW COMPONENT ====================
export const CardRow = ({ children, gap = 2, className = '' }: CardRowProps) => {
  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5'
  };

  return (
    <div className={`flex items-center ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};