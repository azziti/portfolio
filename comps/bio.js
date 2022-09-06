import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled"; 

const Bio = styled(Box)`
    padding-left : 3.4em;
    text-indent : -3.4em;
`;

const SkillSet = styled(Box)`
    padding-left : 3.4em;
    text-indent : -3.4em;
    margin-top : 2em;
    margin-bottom : 2em;
`;

const BioYear = styled.span`
    font-weight : bold;
    margin-right : 1em;
    margin-left : 1em;
`;

const SkillHeading = styled.span`
    font-weight : bold;
    margin-right : 1em;
    margin-left : 1em;
`;

export { Bio, BioYear, SkillHeading, SkillSet };