import React, {FC} from 'react';
import styles from 'styles/layouts/layout.module.scss'

const Layout: FC = ({children}) => {
  return (
    <section>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Layout;