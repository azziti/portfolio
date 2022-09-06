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
          esi2a <Badge>2020</Badge>
        </Title>
        <P>
            It&apos;s a showcase website for an automotive and aeronautical engineering school called Esi2a , which present every single information about this school from the study programme all the way to the staff.  
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
            <Link href="https://www.esi2a.ma/" target='_blank'>
              esi2a <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/esi2a/esi2a1.jpeg" alt="esi2a" />
        <ProjectImage src="/images/projects/esi2a/esi2a2.jpeg" alt="esi2a" />
        <ProjectImage src="/images/projects/esi2a/esi2a3.jpeg" alt="esi2a" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  