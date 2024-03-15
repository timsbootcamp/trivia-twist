import React from 'react';

const VisibilityContext = React.createContext({
 currentPage: 'home',
 setCurrentPage: () => {},
});

export const VisibilityProvider = VisibilityContext.Provider;
export const VisibilityConsumer = VisibilityContext.Consumer;

export default VisibilityContext;