export const layoutPresets = {
  // Masonry seperti Pinterest
  masonry: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridAutoRows: '10px',
    gridGap: '24px'
  },
  
  // Grid dengan ukuran berbeda
  featuredGrid: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 200px)',
    gridGap: '20px'
  },
  
  // Flexbox untuk horizontal scroll
  horizontalScroll: {
    display: 'flex',
    overflowX: 'auto',
    gap: '16px',
    padding: '16px 0'
  },
  
  // Equal height cards
  equalHeight: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridAutoRows: '1fr',
    gap: '24px'
  }
}

export const getResponsiveColumns = (breakpoint: 'mobile' | 'tablet' | 'desktop') => {
  const columns = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  }
  
  return `grid-cols-${columns[breakpoint]}`
}