import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const AnimatedDiv = chakra(motion.div, {
    shouldForwardProp : prop => {
        return shouldForwardProp(prop) ||  prop === 'transition';
    }
});

const Section = ({ children, delay=0, props }) => (
    <AnimatedDiv  initial={{ y:0, opacity : 0 }}
                  animate={{ y:0, opacity : 1 }}
                  transition={{ duration : .8 , delay }}
                  mb={6}
                  {...props}

    >
        {children}
    </AnimatedDiv>
);
export default Section;