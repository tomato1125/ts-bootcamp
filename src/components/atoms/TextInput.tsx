import React, {FC} from 'react';
import styles from 'styles/atoms/form.module.scss';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string | number
  type: string
}

// パフォーマンスを上げるために、React.memoを記述する。
// React.memoでラッピングすることによって、同じ画面で、別の要素がレンダリングされたときに、SearchFieldの中身（TextInputやSearchButton）の再レンダリングを防ぐことができる。
const TextInput: FC<Props> = React.memo((Props) => {
  // 分割代入でキーを１つずつ変数として取り出し宣言する
  const {
    onChange,
    value,
    type
  } = Props

  return (
    <input
      className={styles.form__text}
      // イベントで受け取ったものをonChangeで渡す
      onChange={(e) => onChange(e)}
      value={value}
      type={type}
    />
  )
})

export default TextInput;