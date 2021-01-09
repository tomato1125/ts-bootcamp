import React, {FC} from 'react';
import styles from 'styles/utility/flex.module.scss';
import {SearchButton, TextInput} from "componets/atoms"
import {useStringChangeEvent} from 'lib/customHooks';


const SearchField: FC = () => {

  const [keyword, setKeyword] = useState<string>("");
  return (
    <div className={styles.flex__row_center}>

    </div>
  )
}