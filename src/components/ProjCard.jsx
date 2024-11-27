import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import {useNavigate} from "react-router";

const ProjCard = ({name, count, sum, meg}) => {
    const navigate = useNavigate();

    return (
        <>
            <Card>
                <CardHeader title={name}/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        人数:{count}/{sum}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">介绍:{meg}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => {
                        navigate(`/student/ProjDetail/${name}/${count}/${sum}/${meg}`)
                    }}>详情</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ProjCard;