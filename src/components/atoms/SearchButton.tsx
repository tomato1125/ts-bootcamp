import React, {FC} from 'react';
import styles from 'styles/atoms/button.module.scss';

interface Props {
  label: string
  onClick: () => void
}

const SearchButton: FC = () => {

  return (
    <button
      className={styles.button_search}
      onClick={onClick}
    >
      {label}
  </button>
  )
} 