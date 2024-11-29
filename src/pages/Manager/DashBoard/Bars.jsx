import {BarChart} from "@mui/x-charts";
import {Card, Grid2, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const Bars = ({projDataList}) => {
    const theme = useTheme()

    return (
        <Grid2 size={12}>
            <Card>
                <BarChart
                    colors={[theme.palette.primary.light, theme.palette.secondary.light]}
                    xAxis={[{scaleType: 'band', data: ['大创', '竞赛', '毕设']}]}
                    series={[
                        {data: [projDataList[0].sum, projDataList[1].sum, projDataList[2].sum], label: '项目总数'},
                        {
                            data: [projDataList[0].valid, projDataList[2].valid, projDataList[2].valid],
                            label: '有效项目数'
                        }]}
                    width={500}
                    height={300}
                    barLabel="value"
                />
            </Card>
        </Grid2>
    )
}

Bars.propTypes = {
    projDataList: PropTypes.array.isRequired,
}

export default Bars;