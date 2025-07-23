import React from 'react';

type MainPageLayoutProps = {
  children: React.ReactNode;
};

export function MainPageLayout({ children }: MainPageLayoutProps) {
  return <div>{children}</div>;
}
