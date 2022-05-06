import ChartBar from './ChartBar'
import './Chart.css'

function Chart(props) {
    const _dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    )
    const totalMaximum = Math.max(..._dataPointValues)

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart
