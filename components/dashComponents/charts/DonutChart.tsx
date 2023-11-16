import { PieChartData } from '@/types/models'
import { ResponsivePie } from '@nivo/pie'

type PaiDataProps = {
    data: PieChartData[]
}

export const DonutChart = ({ data }: PaiDataProps) => (

    <ResponsivePie
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        // startAngle={0}
        sortByValue={true}
        innerRadius={0.65}
        activeOuterRadiusOffset={8}
        colors={['#3ec1a1', '#7752FE']}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
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
        isInteractive={false}
        legends={[]}
    />
)
