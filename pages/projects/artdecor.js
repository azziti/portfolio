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
    <Layout title="Artdecor">
      <Container>
        <Title>
          Artdecor <Badge>2021</Badge>
        </Title>
        <P>
          Artdecor is an E-commerce web application owned by FESUP agency, to sell and promote Wallart and paintings.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Laravel, Livewire, jQuery, Bootstrap, MySQL.</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://v2.artdecor.ma/" target='_blank'>
              Artdecor <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/artdecor/artdecor1.jpeg" alt="Artdecor" />
        <ProjectImage src="/images/projects/artdecor/artdecor2.jpeg" alt="Artdecor" />
        <ProjectImage src="/images/projects/artdecor/artdecor3.jpeg" alt="Artdecor" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  