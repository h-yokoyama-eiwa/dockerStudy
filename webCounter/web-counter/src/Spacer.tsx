import React, { FC } from 'react'

type SpacerProps = {
  width: string;
  height: string;
}

export const Spacer: FC<SpacerProps> = ({ width, height }) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: 'inline-block',
        flexShrink: 0
      }}
    />
  )
}
