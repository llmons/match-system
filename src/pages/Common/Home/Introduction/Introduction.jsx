import {useRef} from 'react';
import {Box, Card, CardContent, Grid2, Stack, Typography} from '@mui/material';
import {motion, useInView} from 'motion/react';
import PropTypes from "prop-types";
import AnimatedLink from "./AnimatedLink.jsx";

const Section = ({isReversed = false, description, index}) => {
    const ref = useRef(null);
    useInView(ref, {threshold: 0.1});

    // 定义动画
    const animationVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0},
    };

    return (
        <Box
            ref={ref}
            sx={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Grid2 container spacing={20}>
                {/* 左侧内容（A：Card，B：Text） */}
                <Grid2 size={6}
                       sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                       component={motion.div}
                       variants={animationVariants}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{once: true}} // 动画只会在进入视口时执行一次
                       transition={{delay: 0.2, duration: 1, type: 'spring'}}
                >
                    {isReversed ? (
                        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                            <Typography variant="body1" sx={{textIndent: '1rem'}}>
                                {description}
                            </Typography>
                            <AnimatedLink href="/student/projPlaza">寻找竞赛项目</AnimatedLink>
                        </Stack>
                    ) : (
                        <Card>
                            {index === 0 ? (<img src="/src/assets/ieproj.svg" alt="svg" width="100%"/>)
                                : (<img src="/src/assets/graduation.svg" alt="svg" width="100%"/>)}

                        </Card>
                    )}
                </Grid2>

                {/* 右侧内容（A：Text，B：Card） */}
                <Grid2 size={6}
                       sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                       component={motion.div}
                       variants={animationVariants}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{once: true}} // 动画只会在进入视口时执行一次
                       transition={{delay: 0.2, duration: 1, type: 'spring'}}
                >
                    {isReversed ? (
                        <Card>
                            <CardContent>
                                <img src="/src/assets/competition.svg" alt="svg" width="100%"/>
                            </CardContent>
                        </Card>
                    ) : (
                        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                            <Typography variant="body1" sx={{textIndent: '1rem'}}>
                                {description}
                            </Typography>
                            {index === 0 ? (<AnimatedLink href="/student/projPlaza">寻找大创项目</AnimatedLink>)
                                : (<AnimatedLink href="/student/projPlaza">寻找毕设项目</AnimatedLink>)}
                        </Stack>
                    )}
                </Grid2>
            </Grid2>
        </Box>
    );
};

Section.propTypes = {
    isReversed: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.number,
}

const Introduction = () => {
    return (
        <Box>
            <Section
                title="A区的卡片标题"
                description="大创项目是大学生自主创新的广阔舞台，
                旨在鼓励学生以团队合作的形式，进行科技创新、社会实践及创业探索。
                在这里，您将有机会与志同道合的同学一起，挑战传统思维，
                开创属于自己的研究和实践项目。无论是科研突破、技术创新，
                还是社会服务，加入大创项目，将为您的大学生活增添浓墨重彩的一笔。
                快速对接导师资源，携手前行，一起在创新的道路上不断探索。"
                isReversed={false}
                index={0}
            />
            <Section
                title="B区的卡片标题"
                description="竞赛项目是展现才华与智慧的竞技场。
                这里汇聚了各类专业领域的学术竞赛、创新大赛与挑战赛，旨在锻炼学生的综合能力，
                激发创新思维。无论是编程、设计、商业计划，还是创业项目，通过竞赛，
                您不仅能够与同行的高手一较高下，还能获得宝贵的实战经验和导师指导。
                加入竞赛项目，和团队一起挑战极限，收获成长与荣誉！"
                isReversed={true}
                index={1}
            />
            <Section
                title="C区的卡片标题"
                description="毕设项目是每位大学生学术生涯的重要一环，
                是展示学术能力和创新思维的最佳机会。
                在这里，您将有机会参与到真实的研究课题、工程实践及技术开发中，
                深入学习并挑战自己。在导师的指导下，您将能够将所学知识应用于实际项目，
                展现专业素养，并为未来的职业生涯积累丰富经验。无论是理论研究还是项目开发，
                毕设项目都将为您提供坚实的学术基础和实践平台，助力您的未来！"
                isReversed={false}
                index={2}
            />
        </Box>
    );
};

export default Introduction
