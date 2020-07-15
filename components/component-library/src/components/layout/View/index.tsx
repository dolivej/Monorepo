import React, { ReactNode } from 'react'

interface ViewProps {
  className?: string,
  children: ReactNode,
}

export const View = ({ className, children }: ViewProps) => (
  <div className="section">
    <div className="container">
      <div className={className}>
      {children}
      </div>
    </div>
  </div>
)