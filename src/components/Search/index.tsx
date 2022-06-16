import { useCallback, useRef, useState, FC, ChangeEvent } from 'react'
import debounce from 'lodash.debounce'
import search from '../../assets/img/search-icon.svg'
import clear from '../../assets/img/clear-icon.svg'
import styles from './styles.module.scss'
import { useDispatch } from 'react-redux'
import { setSearchPizza } from '../../store/slices/filterSlice'

const Search: FC = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    dispatch(setSearchPizza(''))
    setValue('')
    inputRef.current?.focus()
  }

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchPizza(str))
    }, 1000),
    []
  )

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={search} alt="search icon" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={clear}
          alt="clear icon"
        />
      )}
    </div>
  )
}

export default Search
