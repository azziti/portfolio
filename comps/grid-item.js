import NextLink from 'next/link';
import Image from 'next/image';
import {
    Box,
    Text,
    LinkBox,
    LinkOverlay
} from '@chakra-ui/react';
import { Global } from '@emotion/react';

const GridItem = ({children, href, title, thumbnail }) => (

    <Box w='100%'
         align='center'        
    >
        <LinkBox cursor='pointer'>
            <Image src={thumbnail}
                   alt={title}
                   className='grid-item-thumbnail'
                   placeholder='blur'
                   loading='lazy' 
            />
            <LinkOverlay href={href}
                         target="_blank" 
            
            >
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

const ProjectGridItem = ({children, id, title, thumbnail}) => (
    <Box w='100%'
         align='center'
    >
        <NextLink href={`/projects/${id}`}>
            <LinkBox cursor='pointer'>
                <Image src={thumbnail}
                       alt={title}
                       className='grid-item-thumbnail'
                       placeholder='blur'
                       loading='lazy'        
                />
                <LinkOverlay>
                    <Text mt={2} 
                          fontSize={20}
                    >
                        {title}
                    </Text>
                </LinkOverlay>
                <Text  fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
);

const GridItemStyle =  () => (
    <Global styles={
        `.grid-item-thumbnail {
            borderRadius : 12px; 
        } `
    } /> 
);

export { GridItem, ProjectGridItem, GridItemStyle };