import React, {FC} from 'react';
import styles from 'styles/atoms/button.module.scss';

interface Props {
  label: string
  onClick: () => void
}

const SerchButton: FC<Props> = (props) => {
  const {
    label,
    onClick
  } = props
  return (
    <button
      className={styles.button__search}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default SerchButton;