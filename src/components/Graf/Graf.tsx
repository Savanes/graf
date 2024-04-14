import './Graf.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options = {

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2024 to 2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2022
        }
    },

    series: [{
        data: [500521, 480512, 480521]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

};

    function Graf(){

        return(
            <div className='graf'>
            <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )
    }

    export default Graf