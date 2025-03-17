import { FC, useState } from 'react'

import { TTooltipProps } from '@components/tooltip/tooltip.types'

import '@components/tooltip/tooltip.css'

export const Tooltip: FC<TTooltipProps> = ({
  children,
  tooltipContent,
  condition = true,
  position = 'top',
  backgroundColor = 'black',
  cssPosition = 'rel',
  inlineStyle,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`tooltip ${cssPosition}`} style={inlineStyle}>
      <div
        className='tooltip__target'
        onMouseEnter={() => condition && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <div className={`tooltip__container ${position} ${backgroundColor}`}>
          <div
            className={`tooltip__container-box ${position} ${backgroundColor}`}
          >
            {tooltipContent}
          </div>
        </div>
      )}
    </div>
  )
}

