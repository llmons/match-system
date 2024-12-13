import {useRef} from 'react';
import {Box, Card, CardContent, Grid2, Stack, Typography} from '@mui/material';
import {motion, useInView} from 'motion/react';
import PropTypes from "prop-types";
import TAnimatedLink from "./TAnimatedLink.jsx";

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
                            {index === 0 ? (<TAnimatedLink href="/teacher/newProj">创建大创项目</TAnimatedLink>)
                                : (<TAnimatedLink href="/teacher/newProj">创建毕设项目</TAnimatedLink>)}
                        </Stack>
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
                        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
                            <Typography variant="body1" sx={{textIndent: '1rem'}}>
                                {description}
                            </Typography>
                            <TAnimatedLink href="/teacher/newProj">创建竞赛项目</TAnimatedLink>
                        </Stack>
                    ) : (
                        <Card>
                            {index === 0 ? (<img src="/src/assets/ieproj.svg" alt="svg" width="100%"/>)
                            : (<img src="/src/assets/graduation.svg" alt="svg" width="100%"/>)}
                        </Card>
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

const TIntroduction = () => {
    return (
        <Box>
            <Section
                title="A区的卡片标题"
                description="大创项目不仅为学生提供了一个将理论知识转化为实践创新的舞台，更是老师们发挥专业智慧、引领学术前沿、培养未来社会栋梁的重要桥梁。
                我们诚挚地鼓励各位老师积极创建大创项目，利用您的科研经验、行业洞察以及对教育的热情，设计具有挑战性、前瞻性和实用价值的课题。这些项目将成为学生
                探索未知、挑战自我、团队协作的宝贵机会，同时也是您指导学生成长、实现教学相长的重要途径。"
                isReversed={false}
                index={0}
            />
            <Section
                title="B区的卡片标题"
                description="竞赛项目不仅为学生提供了展示自我、挑战极限的宝贵机会，也是老师们发挥专业指导优势、推动学生综合素质提升的重要途径。
                我们诚挚地邀请并鼓励各位老师积极创建竞赛项目，运用您的深厚学术功底、丰富实践经验以及对教育的深刻洞察，设计出既富有挑战性又贴近实际
                需求的竞赛题目。这些项目将激发学生的探索热情，促进他们团队协作、问题解决及创新能力的发展，同时也将为您的教学研究提供新的灵感与视角。"
                isReversed={true}
                index={1}
            />
            <Section
                title="C区的卡片标题"
                description="毕业设计项目不仅是学生大学生涯的学术总结，更是老师们指导学生综合运用所学、探索未知、实现个人成长的关键环节。在此,
                我们诚挚地邀请并鼓励各位老师积极创建毕业设计项目，利用您的学术专长、行业见解以及对教育的深刻理解，设计既具有学术价值又贴近实际应用的项目课题。
                这些项目将引导学生深入探索专业领域，培养他们的研究能力、创新思维与团队协作能力，同时也将成为您与学生共同成长的宝贵经历。"
                isReversed={false}
                index={2}
            />
        </Box>
    );
};

export default TIntroduction
