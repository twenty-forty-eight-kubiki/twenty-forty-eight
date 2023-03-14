import React from 'react';

export const getDisplayName = <T,>(WrappedComponent: React.FC<T>) =>
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
