import styles from './HeaderRow.module.css'
import { HeaderRowProps } from './HeaderRow.props'

function HeaderRow({index, thisday, yesterday, week}:HeaderRowProps){
    return(
        <div className={styles['wrapper']}>
            <div className={styles['flex-con']}>
                <div className={styles['index']}>
                    <p>{index}</p>
                </div>
                <div className={styles['thisday']}>
                    <p>{thisday}</p>
                </div>
                <div className={styles['yesterday']}>
                    <p>{yesterday}</p>
                </div>
                <div className={styles['week']}>
                    <p>{week}</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderRow