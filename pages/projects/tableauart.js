import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import Layout from '../../comps/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, ProjectImage, Meta } from '../../comps/project'
  import P from '../../comps/paragraph'
  
  const Work = () => (
    <Layout title="Tableauart">
      <Container>
        <Title>
        Tableauart <Badge>2021</Badge>
        </Title>
        <P>
          Tableauart is an online store for selling unique Artwork and paintings with special discount, developed for FESUP agency.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, Vanilla JS, Tailwind, MySQL.</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://tableauart.ma/" target='_blank'>
                Tableauart <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/tableauart/tableauart1.jpeg" alt="Tableauart" />
        <ProjectImage src="/images/projects/tableauart/tableauart2.jpeg" alt="Tableauart" />
        <ProjectImage src="/images/projects/tableauart/tableauart3.jpeg" alt="Tableauart" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  