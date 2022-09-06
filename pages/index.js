import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Link,
  Button,
  chakra,
  List,
  ListItem,
  Image as ChakraImage,
  SimpleGrid
} from '@chakra-ui/react'
import Paragraph from '../comps/paragraph'
import Section from '../comps/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Bio, BioYear, SkillHeading, SkillSet } from '../comps/bio'
import Layout from '../comps/layouts/article'
import Image from 'next/image'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoLaravel,
  IoLogoIonic
} from 'react-icons/io5'
import {
  SiAngularjs,
  SiFiverr,
  SiGmail,
  SiMicrosoftsqlserver,
  SiReact,
  SiSpringboot,
  SiTailwindcss
} from 'react-icons/si'
import { AiOutlineAndroid, AiOutlineHtml5 } from 'react-icons/ai'
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandReactNative
} from 'react-icons/tb'
import { DiDotnet, DiWordpress } from 'react-icons/di'
import { GrMysql, GrOracle } from 'react-icons/gr'
import { TiLeaf } from 'react-icons/ti'
import { FiSettings } from 'react-icons/fi'
import {  ProjectGridItem } from '../comps/grid-item'
import thumbArtdecor from '../public/images/projects/artdecor/artdecor.jpeg'
import thumbTableauart from '../public/images/projects/tableauart/tableauart.jpeg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          textAlign="center"
          mb={6}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a full stack developer.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Azziti Hamza
            </Heading>
            <p>Front end / Back end / Mobile development .</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/hamza.png"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hamza is a freelancer , engineer , and a full stack developer based
            in Fez, Morocco. He is passionate about building digital services
            and stuff. he has a shining at all things, from modeling and
            planning all the way to solving real-life problems with code.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <Bio>
            <BioYear>2000</BioYear>
            Born in Fez (فاس),
            <span style={{ whiteSpace: 'nowrap' }}>
              &nbsp; Morocco
              <ChakraImage
                src="/tarbouche.png"
                alt="Moroccan tarbouch"
                display="inline-block"
                height="18px"
                width="18px"
                mx={2}
                mb={-1}
              />
            </span>
          </Bio>
          <Bio>
            <BioYear>2018</BioYear>
            Got his highschool degree (mathematics speciality)
          </Bio>
          <Bio>
            <BioYear>2018 - Present</BioYear>
            Engineering Student at the National School of Applied Sciences of
            Fez, Morocco (المدرسة الوطنية للعلوم التطبيقية بفاس)
          </Bio>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Code challenges, Machine Learning and Deep Learning, Art, Music,
            Gaming
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Experience & skills
          </Heading>
          <SkillSet>
            <SkillHeading>Frontend :</SkillHeading>
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              paddingInlineEnd="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<AiOutlineHtml5 />}
            >
              Html
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              paddingInlineEnd="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<TbBrandCss3 />}
            >
              Css
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              paddingInlineEnd="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<TbBrandBootstrap />}
            >
              Bootstrap
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              paddingInlineEnd="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiTailwindcss />}
            >
              Tailwind
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              paddingInlineEnd="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiReact />}
            >
              ReactJs
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              paddingInlineEnd="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiAngularjs />}
            >
              Angular
            </Button>
          </SkillSet>
          <SkillSet>
            <SkillHeading>Backend :</SkillHeading>
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiSpringboot />}
            >
              Spring boot
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLaravel />}
            >
              Laravel
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<DiDotnet />}
            >
              Asp .NET
            </Button>/
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<FiSettings />}
            >
              REST API
            </Button>
          </SkillSet>
          <SkillSet>
            <SkillHeading>DBMS :</SkillHeading>
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<GrMysql />}
            >
              MySQL
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<SiMicrosoftsqlserver />}
            >
              SQL Server
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<GrOracle />}
            >
              Oracle
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<TiLeaf />}
            >
              MangoDB
            </Button>
          </SkillSet>
          <SkillSet>
            <SkillHeading>Mobile & CMS :</SkillHeading>
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<AiOutlineAndroid />}
            >
              Android studio (Java)
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<TbBrandReactNative />}
            >
              React Native
            </Button>
            /
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoIonic />}
            >
              Ionic
            </Button>/
            <Button
              h="2.1rem"
              paddingInlineStart="5px"
              variant="ghost"
              colorScheme="teal"
              leftIcon={<DiWordpress />}
            >
              Wordpress
            </Button>
          </SkillSet>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" my='2em' variant="section-title">
            Recent works
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem
                id="artdecor"
                thumbnail={thumbArtdecor}
                title="Artdecor"
              >
                A web store for Wall Art.
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem
                id="tableauart"
                thumbnail={thumbTableauart}
                title="Tableauart"
              >
                Online store for promoted Artwork.
              </ProjectGridItem>
            </Section>

          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                All projects
              </Button>
            </NextLink>
          </Box>

        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="mailto:azziti2000@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<SiGmail />}
                >
                  azziti@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/hamza-azziti-b79267201"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Azziti Hamza
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.fiverr.com/hamza_azziti" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<SiFiverr fontSize="32px" />}
                >
                  @hamza_azziti
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/azziti" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @azziti
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://instagram.com/hereishamzaazziti/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @hereishamzaazziti
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
