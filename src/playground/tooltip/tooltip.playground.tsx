import { FC } from 'react'

import { Tooltip, TTooltipProps } from '@components/tooltip'

const Tooltiplayground: FC<Partial<TTooltipProps>> = (
  props: Partial<TTooltipProps>
): JSX.Element => {
  return (
    <div className='w-full h-max flex justify-center mt-48 items-center gap-8'>
      <Tooltip
        {...props}
        tooltipContent={<p>Tooltip content</p>}
        position='left'
        backgroundColor='primary'
      >
        <p className='text-white text-xl'>Tooltip left primary</p>
      </Tooltip>
      <Tooltip {...props} tooltipContent={<p>Tooltip content</p>}>
        <p className='text-white text-xl'>Tooltip top</p>
      </Tooltip>
      <Tooltip
        {...props}
        tooltipContent={<p>Tooltip content</p>}
        position='bottom'
      >
        <p className='text-white text-xl'>Tooltip bottom</p>
      </Tooltip>
      <Tooltip
        {...props}
        tooltipContent={<p>Tooltip content</p>}
        position='right'
        backgroundColor='primary'
      >
        <p className='text-white text-xl'>Tooltip right primary</p>
      </Tooltip>
    </div>
  )
}

export default Tooltiplayground

