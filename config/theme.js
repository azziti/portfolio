import { extendTheme  } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global : props => ({
        body : {
            bg : mode('#F0E7DB' ,'#000')(props)
            // bg : mode('#F0E7DB' ,'#202023')(props)
        }
    })
}

const components = {
    Heading : {
        variants : {
            'section-title' : {
                textDecoration : 'underline',
                fontSize : 20,
                textInderLineOffSet : 6,
                textDecorationColor : '#525252',
                textDecorationThickness : 4,
                marginTop :3,
                marginBottom :3
            }
        }
    },
    Link : {
        baseStyle : props => ({
            color : mode('#3d7aed','#ff63c3')(props),
            textInderLineOffSet : 3
        })
    }
}

const fonts = {
    Heading : "'M PLUS Rounded 1c'"
}

const colors = {
    glassTeal : '#88ccca'
}

const config = {
    initialColorMode : 'dark',
    useSystemColorMode : true
}

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors
});

export default theme;