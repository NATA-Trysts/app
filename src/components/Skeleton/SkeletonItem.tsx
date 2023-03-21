/* eslint-disable react/no-array-index-key */
import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react'

import { ReactLoadingSkeleton } from './SkeletonStyled'
import { SkeletonStyleProps } from './SkeletonStyleProps'
import { SkeletonThemeContext } from './SkeletonThemeContext'

const defaultEnableAnimation = true

// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties({
  baseColor,
  highlightColor,

  width,
  height,
  borderRadius,
  circle,

  direction,
  duration,
  enableAnimation = defaultEnableAnimation,
}: SkeletonStyleProps & { circle: boolean }): CSSProperties {
  const style: CSSProperties & Record<`--${string}`, string> = {}

  if (direction === 'rtl') style['--animation-direction'] = 'reverse'
  if (typeof duration === 'number') style['--animation-duration'] = `${duration}s`
  if (!enableAnimation) style['--pseudo-element-display'] = 'none'

  if (typeof width === 'string' || typeof width === 'number') style.width = width
  if (typeof height === 'string' || typeof height === 'number') style.height = height

  if (typeof borderRadius === 'string' || typeof borderRadius === 'number') style.borderRadius = borderRadius

  if (circle) style.borderRadius = '50%'

  if (typeof baseColor !== 'undefined') style['--base-color'] = baseColor
  if (typeof highlightColor !== 'undefined') style['--highlight-color'] = highlightColor

  return style
}

export type SkeletonProps = {
  count?: number
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>

  className?: string
  containerClassName?: string
  containerTestId?: string

  circle?: boolean
  style?: CSSProperties
} & SkeletonStyleProps

export function SkeletonItem({
  count = 1,
  wrapper: Wrapper,

  containerClassName,
  containerTestId,

  circle = false,

  style: styleProp,
  ...originalPropsStyleOptions
}: SkeletonProps): ReactElement {
  const contextStyleOptions = React.useContext(SkeletonThemeContext)

  const propsStyleOptions = { ...originalPropsStyleOptions }

  // DO NOT overwrite style options from the context if `propsStyleOptions`
  // has properties explicity set to undefined
  for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
    if (typeof value === 'undefined') {
      delete propsStyleOptions[key as keyof typeof propsStyleOptions]
    }
  }

  // Props take priority over context
  const styleOptions = {
    ...contextStyleOptions,
    ...propsStyleOptions,
    circle,
  }

  // `styleProp` has the least priority out of everything
  const style = {
    ...styleProp,
    ...styleOptionsToCssProperties(styleOptions),
  }

  const inline = styleOptions.inline ?? false

  const elements: ReactElement[] = []

  const countCeil = Math.ceil(count)

  for (let i = 0; i < countCeil; i++) {
    let thisStyle = style

    if (countCeil > count && i === countCeil - 1) {
      // count is not an integer and we've reached the last iteration of
      // the loop, so add a "fractional" skeleton.
      //
      // For example, if count is 3.5, we've already added 3 full
      // skeletons, so now we add one more skeleton that is 0.5 times the
      // original width.

      const width = thisStyle.width ?? '100%' // 100% is the default since that's what's in the CSS

      const fractionalPart = count % 1

      const fractionalWidth = typeof width === 'number' ? width * fractionalPart : `calc(${width} * ${fractionalPart})`

      thisStyle = { ...thisStyle, width: fractionalWidth }
    }

    const skeletonSpan = (
      <ReactLoadingSkeleton key={i} style={thisStyle}>
        &zwnj;
      </ReactLoadingSkeleton>
    )

    if (inline) {
      elements.push(skeletonSpan)
    } else {
      // Without the <br />, the skeleton lines will all run together if
      // `width` is specified
      elements.push(
        <React.Fragment key={i}>
          {skeletonSpan}
          <br />
        </React.Fragment>,
      )
    }
  }

  return (
    <ReactLoadingSkeleton
      aria-busy={styleOptions.enableAnimation ?? defaultEnableAnimation}
      aria-live="polite"
      className={containerClassName}
      data-testid={containerTestId}
    >
      {Wrapper ? elements.map((el, i) => <Wrapper key={i}>{el}</Wrapper>) : elements}
    </ReactLoadingSkeleton>
  )
}
