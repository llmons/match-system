import {Box, Card, CardContent, CardHeader, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const ProjDetailManager = () => {
    const [proj, setProj] = useState({
            "id": 791,
            "name": "可总也",
            "status": "valid",
            "sum": 6,
            "count": 3,
            "message": "这是一个大创项目",
            "information": "很少件包较准究眼求。维米存教单铁七。直门上气干物。\n在要放其。七百位县克三引子。目示太带十下通。\n相厂最物管将消团起周。流全况代。更容太真。\n管组以群度局开调养。式查断不百正系些。品育存向手达着。\n流史老使对照八。指支过安传指。专住指目。\n些斯水。铁应层员器组别色系。便见今交动省光质信。",
            "instructor": "塞婷婷",
            "research_direction": "度的听",
            "major": "列身志",
            "category": "创新类项目",
            "subjec_source": "更厂器",
            "fund_number": "120100196509086194",
            "deadline": "2025-07-18 00:52:46"
        }
    );

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/get/1")
                .then((res) => res.json())
                .then(json => json.data)
                .catch(err => console.log(err));
            setProj(data);
        }
    }, [])

    return (
        <Box p={10} sx={{mt: 20}}>
            <Card>
                <CardHeader title={proj.name}/>
                <CardContent>
                    <TextField
                        label="项目名称">

                    </TextField>
                    <Typography>当前人数{proj.count}</Typography>
                    <Typography>项目总人数{proj.sum}</Typography>
                    <Typography>指导老师{proj.instructor}</Typography>
                    <Typography>简介{proj.message}</Typography>
                    <Typography>详细说明{proj.information}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ProjDetailManager;