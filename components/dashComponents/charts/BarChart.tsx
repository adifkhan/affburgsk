import { BarChartData } from '@/types/models'
import { ResponsiveBar } from '@nivo/bar'

type BarChartDataProps = {
    data: BarChartData[]
}
export default function BarChart({ data }: BarChartDataProps) {
    const theme = {
        labels: { text: { fontSize: 10, } },
        axis: {
            ticks: {
                text:
                {
                    fontSize: 11,
                    fill: "lightGrey"
                },
            },
            legend: {
                text:
                {
                    fill: "lightGrey"
                },
            }
        }
    };
    return (
        <ResponsiveBar
            data={data}
            keys={[
                'Clicks',
                'Subscription',
                'Registration',
                'Confirms',
                'Installs',
                'Sales'
            ]}
            indexBy="country"
            margin={{ top: 40, right: 0, bottom: 150, left: 0 }}
            padding={0.4}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={['#C2D9FF', '#8E8FFA', '#7752FE', '#793FDF', '#64CCC5', '#ED7D31']}

            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            // axisLeft={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: 'Quantity',

            //     legendPosition: 'middle',
            //     legendOffset: -40,
            // }
            // }
            axisLeft={null}
            theme={theme}
            enableGridX={true}
            enableGridY={false}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        3
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 100,
                    itemsSpacing: 5,
                    itemWidth: 63,
                    itemHeight: 0,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 8,
                    itemTextColor: "whiteSmoke",
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            isInteractive={false}
            motionConfig={{
                mass: 1,
                tension: 170,
                friction: 26,
                clamp: false,
                precision: 0.01,
                velocity: 0
            }}
            role="application"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
    )
}
