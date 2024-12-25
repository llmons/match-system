import {Accordion, AccordionDetails, AccordionSummary, Button, Pagination, Stack, Typography} from "@mui/material";
import {useEffect, useMemo, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const api = "http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus"

const AuditProj = () => {
    const [projList, setProjList] = useState([]);
    const [page, setPage] = useState(1);
    const pageSize = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(api)
                    .then(response => response.json())
                    .then(json => json.data);
                setProjList(data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData().then(null);
    }, [])

    const paginatedList = useMemo(() => projList.slice((page - 1) * pageSize, page * pageSize), [page, projList, pageSize]);

    return (
        <Stack
            direction="column"
            spacing={3}
            mt={5}
            ml={5}
            sx={{width: '95%', height: '100%'}}>
            {paginatedList.map((item, i) => (
                <Accordion key={i} sx={{
                    borderRadius: "10px",
                    "&:before": {
                        display: "none",
                    },
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <Stack direction="column">
                            <Typography>{item.name}</Typography>
                            <Typography>人数：{item.sum}</Typography>
                            <Typography>简介：{item.message}</Typography>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="row" justifyContent="end" alignItems="center" gap={2}>
                            <Typography variant="body2" flex={1}>详情</Typography>
                            <Button variant="contained" color="error">删除记录</Button>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
            <Pagination
                page={page}
                count={Math.ceil(projList.length / pageSize)}
                onChange={(_, p) => {
                    setPage(p)
                }}
                color='#FAA'
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            />
        </Stack>
    )
}

export default AuditProj;