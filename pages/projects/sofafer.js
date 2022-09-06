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
    <Layout title="Sofafer">
      <Container>
        <Title>
          Sofafer <Badge>2020</Badge>
        </Title>
        <P>
            It&apos;s a website for a Moroccan iron manufacturing enterprise called Sofafer, presenting all the services and the products of this enterprise.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>WordPress.</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.sofafer.ma" target='_blank'>
              Sofafer <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/sofafer/sofafer1.jpeg" alt="Sofafer" />
        <ProjectImage src="/images/projects/sofafer/sofafer2.jpeg" alt="Sofafer" />
        <ProjectImage src="/images/projects/sofafer/sofafer3.jpeg" alt="Sofafer" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  