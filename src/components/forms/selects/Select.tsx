import type { GroupBase, Props } from 'react-select'
import type { SelectColor, SelectCustomProps } from '@/components/forms/selects/types'
import { default as ReactSelect } from 'react-select'
import clsx from 'clsx'
import {
  clearIndicatorStyles,
  controlStyles,
  dropdownIndicatorStyles,
  groupHeadingStyles,
  indicatorsContainerStyles,
  indicatorSeparatorStyles,
  menuStyles,
  multiValueLabelStyles,
  multiValueRemoveStyles,
  multiValueStyles,
  noOptionsMessageStyles,
  optionStyles,
  placeholderStyles,
  selectInputStyles,
  singleValueStyles,
  valueContainerStyles,
  defaultSelectStyles,
} from '@/components/forms/selects/styles'
import ClearIndicator from '@/components/forms/selects/ClearIndicator'
import MultiValueRemove from '@/components/forms/selects/MultiValueRemove'
import DropdownIndicator from '@/components/forms/selects/DropdownIndicator'

const Select = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & SelectCustomProps) => (
    <ReactSelect<Option, IsMulti, Group>
        unstyled
        styles={defaultSelectStyles()}
        components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
        classNames={{
          control: ({ isDisabled, isFocused }) =>
              clsx(
                  controlStyles.base,
                  isDisabled && controlStyles.disabled,
                  isFocused && controlStyles.focus.base,
                  isFocused && controlStyles.focus.colors[(props.color ?? 'gray') as SelectColor],
                  !isFocused && controlStyles.nonFocus.base,
                  !isFocused && controlStyles.nonFocus.colors[(props.color ?? 'gray') as SelectColor],
              ),
          placeholder: () => clsx(
              placeholderStyles.base,
              placeholderStyles.colors[(props.color ?? 'gray') as SelectColor],
          ),
          input: () => selectInputStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          menu: () => menuStyles,
          groupHeading: () => groupHeadingStyles,
          option: ({ isSelected, isDisabled }) =>
              clsx(
                  optionStyles.base,
                  isSelected && optionStyles.selected,
                  isDisabled && optionStyles.disabled,
              ),
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
    />
)

export default Select