import {Card, CardHeader, Grid2, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {PieChart} from "@mui/x-charts";

const Pies = ({projDataList}) => {
    const theme = useTheme();

    return (
        <>
            {projDataList.map((proj) => (
                <Grid2 size={6} key={proj.name}>
                    <Card>
                        <CardHeader title={proj.name}/>
                        <PieChart
                            colors={[theme.palette.success.light, theme.palette.error.light]}
                            series={[
                                {
                                    data: [
                                        {id: 0, value: proj.valid, label: '有效数'},
                                        {id: 1, value: proj.sum - proj.valid, label: '无效数'},
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Card>
                </Grid2>
            ))}
        </>
    )
}

Pies.propTypes = {
    projDataList: PropTypes.array.isRequired,
}

export default Pies