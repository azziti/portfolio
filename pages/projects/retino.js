import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
  } from '@chakra-ui/react'
  import Layout from '../../comps/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, ProjectImage, Meta } from '../../comps/project'
  import P from '../../comps/paragraph'
  
  const Work = () => (
    <Layout title="Retino">
      <Container>
        <Title>
        Retino <Badge>2022</Badge>
        </Title>
        <P>
            Retino is mobile app that use Deep learing algorithms for early detection of diabetic retinopathy based on images of the internal parts of the eye, also it provide some data collection functionnalities that helps to improve the KPIs of existing ai models.
        </P>

  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS - Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, Spring boot, Fast API, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Source (Mobile UI)</Meta>
            <Link href="https://github.com/azziti/retino_front_end.git" target='_blank'>
            github.com/azziti/retino_front_end <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source (Mackend)</Meta>
            <Link href="https://github.com/azziti/retino_java_backend.git" target='_blank'>
            github.com/azziti/retino_java_backend <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source (Fast API)</Meta>
            <Link href="https://github.com/azziti/retino_ai_server.git" target='_blank'>
            github.com/azziti/retino_ai_server <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
  
        <SimpleGrid columns={2} gap={2}>
          <ProjectImage src="/images/projects/retino/retino1.jpg" alt="Retino" />
          <ProjectImage src="/images/projects/retino/retino2.jpg" alt="Retino" />
          <ProjectImage src="/images/projects/retino/retino3.jpg" alt="Retino" />
          <ProjectImage src="/images/projects/retino/retino4.jpg" alt="Retino" />
          <ProjectImage src="/images/projects/retino/retino5.jpg" alt="Retino" />
          <ProjectImage src="/images/projects/retino/retino6.jpg" alt="Retino" />
          <ProjectImage src="/images/projects/retino/retino7.jpg" alt="Retino" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  