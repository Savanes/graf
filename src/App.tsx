import './App.css'
import HeaderRow from './components/HeaderRow/HeaderRow'
import TableRow from './components/TableRow/TableRow'

function App() {

  return (
    <>
      <HeaderRow
        index='Показатель'
        thisday='Текущий день'
        yesterday='Вчера'
        week='Этот день недели'
      />

      <TableRow
        name='Выручка, руб'
        revenueToday={500521}
        revenueWeek={480521}
        procent={5}
        revenueYesterday={480512}
        color='red'
      />

       <TableRow
        name='Наличные'
        revenueToday={300000}
        revenueWeek={300000}
        procent={0}
        revenueYesterday={300000}
        color='grey'
      />

      <TableRow
        name='Безналичный расчет'
        revenueToday={100000}
        revenueWeek={100000}
        procent={0}
        revenueYesterday={100000}
        color='grey'
      />

      <TableRow
        name='Кредитные карты'
        revenueToday={100521}
        revenueWeek={100521}
        procent={0}
        revenueYesterday={100521}
        color='grey'
      />

      <TableRow
        name='Средний чек, руб'
        revenueToday={1300}
        revenueWeek={900}
        procent={44}
        revenueYesterday={900}
        color='green'
      />

      <TableRow
        name='Средний гость, руб'
        revenueToday={1200}
        revenueWeek={800}
        procent={50}
        revenueYesterday={800}
        color='green'
      />

      <TableRow
        name='Удаление из чека (после оплаты), руб'
        revenueToday={1000}
        revenueWeek={900}
        procent={-9}
        revenueYesterday={1100}
        color='green'
      />

      <TableRow
        name='Удаление из чека (до оплаты), руб'
        revenueToday={1300}
        revenueWeek={1300}
        procent={0}
        revenueYesterday={1300}
        color='green'
      />

      <TableRow
        name='Количество чеков'
        revenueToday={34}
        revenueWeek={34}
        procent={-6}
        revenueYesterday={36}
        color='grey'
      />

      <TableRow
        name='Количество гостей'
        revenueToday={34}
        revenueWeek={32}
        procent={-6}
        revenueYesterday={36}
        color='green'
      />
    </>
  )
}

export default App
