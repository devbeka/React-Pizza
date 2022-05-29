import React, { useCallback, useContext, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import search from '../../assets/img/search-icon.svg'
import clear from '../../assets/img/clear-icon.svg'
import { SearchContext } from '../../App'
import styles from './styles.module.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const { setSearchValue } = useContext(SearchContext)

  const inputRef = useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce((srt) => {
      setSearchValue(srt)
    }, 1000),
    []
  )

  const onChangeInput = (event) => {
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
