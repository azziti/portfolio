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
    <Layout title="Lang2Go">
      <Container>
        <Title>
          Lang2Go <Badge>2022</Badge>
        </Title>
        <P>
          It&apos;s a website that provides text and documents translation. 
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>PHP, Google translate php </span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://lang2go.org" target='_blank'>
              Lang2Go <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/lang2go/lang2go.jpeg" alt="Lang2Go" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  