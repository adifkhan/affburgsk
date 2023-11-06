import { PieChartData } from '@/types/models'
import { ResponsivePie } from '@nivo/pie'

type DonutChartCampDataProps = {
    data: PieChartData[]
}

export const DonutChartCamp = ({ data }: DonutChartCampDataProps) => (

    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        startAngle={-18}
        sortByValue={true}
        innerRadius={.8}
        padAngle={1}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        colors={['#ED7D31', '#7752FE']}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="lightGrey"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'top',
                direction: 'column',
                justify: false,
                translateX: 130,
                translateY: -40,
                itemsSpacing: 6,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: 'lightGrey',
                itemDirection: 'left-to-right',
                itemOpacity: .7,
                symbolSize: 12,
                symbolShape: 'circle',
            }
        ]}
        isInteractive={false}
    />
)