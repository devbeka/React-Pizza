import React from 'react'
import search from '../../assets/img/search-icon.svg'
import clear from '../../assets/img/clear-icon.svg'
import styles from './styles.module.scss'

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={search} alt="search icon" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
          src={clear}
          alt="clear icon"
        />
      )}
    </div>
  )
}

export default Search
