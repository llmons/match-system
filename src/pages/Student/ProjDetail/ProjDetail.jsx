import {Box, Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {useParams} from "react-router";

const ProjDetail = () => {
    const {name, count, sum, msg} = useParams()

    return (
        <Box margin="10%">
            <Card>
                <CardHeader title={name}/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary">当前人数：{count}</Typography>
                    <Typography variant="body2" color="textSecondary">所需总人数：{sum}</Typography>
                    <Typography variant="body2" color="textSecondary">简介：{msg}</Typography>
                </CardContent>
                <CardActions>
                    <Button>申请加入</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default ProjDetail;