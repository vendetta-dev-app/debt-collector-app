import { FC } from 'react'

interface CurrencyCellProps {
  value: number | string | null | undefined;
  currency?: string; // default to USD
  locale?: string; // default to en-US
}

const CurrencyCell: FC<CurrencyCellProps> = ({ value, currency = 'USD', locale = 'en-US' }) => {
  const number = Number(value)

  if (isNaN(number)) {
    return <div>-</div> // fallback if value is not a valid number
  }

  return (
      <div>
        {new Intl.NumberFormat(locale, {
          style: 'currency',
          minimumFractionDigits: 0,
          currency,
        }).format(number)}
      </div>
  )
}

export default CurrencyCell
