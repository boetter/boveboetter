const dateFormatter = new Intl.DateTimeFormat('da-DK', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export function FormattedDate({
  date,
  ...props
}: React.ComponentPropsWithoutRef<'time'> & { date: Date }) {
  return (
    <time dateTime={date.toISOString()} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}
