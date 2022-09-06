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
          Market <Badge>2022</Badge>
        </Title>
        <P>
          Market is an E-commerce plateform, made for C2C business, so user can sell or buy anything they want, also the platform provide analytic tools for buyers so they could view there business status.  
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ASP MVC, jQuery, Bootstrap, SQL Server.</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/azziti/asp_marketplace.git" target='_blank'>
            github.com/azziti/asp_marketplace <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/market/market1.jpeg" alt="Market" />
        <ProjectImage src="/images/projects/market/market2.jpeg" alt="Market" />
        <ProjectImage src="/images/projects/market/market3.jpeg" alt="Market" />
        <ProjectImage src="/images/projects/market/market4.jpeg" alt="Market" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../comps/chakra'
  