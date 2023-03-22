export type RedirectLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export const RedirectLink = ({ href, ...props }: RedirectLinkProps) => {
  return <a href={`/l/?url=${href}`} rel="noreferrer" target="_blank" {...props}></a>
}
