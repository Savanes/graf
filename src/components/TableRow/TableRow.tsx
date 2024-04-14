import { useState } from 'react'
import Graf from '../Graf/Graf'
// import styles from './TableRow.module.css'
import './TableRow.css'
import { TableRowProps } from './TableRow.props'
import cn from 'classnames'

function TableRow({name, revenueToday, revenueYesterday, procent, revenueWeek, color}:TableRowProps){
    const [show, setShow] = useState(false);

    const showGraf = () => {
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }


  return (
    <div className='wrapper' onClick={showGraf}>

        <div className='flex-con'>

            <div className='wrap-name'>
                <p>{name}</p>
            </div>
            <div className='wrap-revenuetoday'>
                <p>{revenueToday}</p>
            </div>

            <div className={cn({
                'wrap-revenueyesterday': procent === 0,
                'wrap-revenueyesterday-green': procent > 0,
                'wrap-revenueyesterday-red': procent < 0,
            })}>
                <p>{revenueYesterday}</p>&nbsp;&nbsp;
                <p className={cn({
                    'procent-green': procent >= 0,
                    'procent-red': procent < 0,
                })}>{procent}%</p>
                {/* сюда ебануть условие */}
            </div>

            <div className={cn({
                'wrap-revenueweek-grey': color === 'grey',
                'wrap-revenueweek-green': color === 'green',
                'wrap-revenueweek-red': color === 'red',
            })}>
                <p>{revenueWeek}</p>
            </div>

        </div>

        {show &&<div>
            <Graf/>
        </div>
        }

    </div>
  )
}

export default TableRow
