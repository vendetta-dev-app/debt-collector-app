import type { DropdownIndicatorProps, GroupBase } from 'react-select'
import { components } from 'react-select'
import { HiChevronDown } from 'react-icons/hi'

const DropdownIndicator = <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: DropdownIndicatorProps<Option, IsMulti, Group>) => {
  return (
      <components.DropdownIndicator {...props}>
        <HiChevronDown className="w-5 h-5"/>
      </components.DropdownIndicator>
  )
}

export default DropdownIndicator