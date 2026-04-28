import clsx from 'clsx'

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/**
 * Placeholder component - animations are handled via motion components
 * This is for reference only as Framer Motion is used for animations
 */
export function ScrollAnimationWrapper({
  children,
  className,
}: ScrollAnimationWrapperProps) {
  return <div className={clsx(className)}>{children}</div>
}
