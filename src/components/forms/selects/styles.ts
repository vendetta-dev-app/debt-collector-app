import { GroupBase, StylesConfig } from 'react-select'

export const controlStyles = {
  base: 'w-full border text-gray-900 text-sm rounded-lg block pl-2 dark:text-white focus:ring-0 ring-0',
  disabled: 'opacity-50',
  focus: {
    base: 'ring-0',
    colors: {
      gray: 'border-blue-500 dark:border-blue-500',
      failure: 'border-red-500 dark:border-red-500',
    },
  },
  nonFocus: {
    base: 'ring-0',
    colors: {
      gray: 'border-gray-300 bg-gray-50 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
      failure: 'border-red-500 bg-red-50 text-red-900 dark:border-red-500 dark:bg-red-900/20 dark:text-red-400',
    },
  },
}
export const placeholderStyles = {
  base: 'pl-1 py-0.5 line-clamp-1',
  colors: {
    gray: 'text-gray-500 dark:text-gray-400',
    failure: 'text-red-700 dark:text-red-400',
  },
}
export const selectInputStyles = 'pl-1 py-1'
export const valueContainerStyles = 'p-0.5 gap-1'
export const singleValueStyles = 'leading-6 ml-1'
export const multiValueStyles =
    'bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5 dark:bg-gray-600'
export const multiValueLabelStyles = 'leading-5 py-0.5'
export const multiValueRemoveStyles = 'border border-gray-200 bg-white hover:bg-gray-100 hover:text-black text-gray-500 hover:border-red-300 rounded-md dark:text-gray-300 dark:bg-gray-500 dark:hover:bg-gray-500 dark:hover:text-gray-100 dark:hover:border-blue-300 dark:border-gray-600'
export const indicatorsContainerStyles = 'p-0.5 gap-1'
export const clearIndicatorStyles = 'cursor-pointer text-gray-500 p-0.5 rounded-md hover:bg-gray-100 hover:text-black dark:hover:bg-gray-600 dark:hover:text-gray-100'
export const indicatorSeparatorStyles = 'bg-gray-300 dark:bg-gray-600'
export const dropdownIndicatorStyles = 'p-0.5 cursor-pointer hover:bg-gray-100 text-gray-500 rounded-md hover:text-black dark:hover:bg-gray-600 dark:hover:text-gray-100'
export const menuStyles = 'p-1 mt-2 border border-gray-200 bg-gray-50 rounded-lg dark:bg-gray-700 dark:border-gray-600'
export const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-blue-700 dark:text-blue-600 font-semibold text-sm'
export const optionStyles = {
  base: 'px-3 py-1.5 rounded text-gray-900 text-sm hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100',
  selected: 'bg-gray-100 dark:bg-gray-800',
  // TODO Look for a better solution rather than adding this important !
  disabled: '!text-gray-400 !dark:text-gray-500',
}
export const noOptionsMessageStyles = 'text-gray-500 p-1.5 has-[button]:p-0 bg-gray-50 border border-dashed border-gray-200 rounded-sm dark:bg-gray-700 dark:border-gray-500'
export const loadingMessageStyles = 'text-gray-500 p-1.5 bg-gray-50 rounded-sm dark:bg-gray-700'

export const defaultSelectStyles = <
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option> = GroupBase<Option>
>(): StylesConfig<Option, IsMulti, Group> => ({
  // @ts-ignore
  input: (base) => ({
    ...base,
    'input:focus': {
      boxShadow: 'none',
    },
  }),
  // On mobile, the label will truncate automatically, so we want to
  // override that behaviour.
  // @ts-ignore
  multiValueLabel: (base) => ({
    ...base,
    whiteSpace: 'normal',
    overflow: 'visible',
  }),
  // @ts-ignore
  control: (base) => ({
    ...base,
    transition: 'none',
  }),
})