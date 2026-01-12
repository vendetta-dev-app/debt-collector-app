export type SelectColor = 'gray' | 'failure'

export interface SelectOption {
  value: string
  label: string
  isDisabled?: boolean
}

export interface SelectCustomProps {
  color?: SelectColor
}