import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../comps/layouts/article'
import Section from '../comps/section'
import { ProjectGridItem } from '../comps/grid-item'
import thumbArtdecor from '../public/images/projects/artdecor/artdecor.jpeg'
import thumbTableauart from '../public/images/projects/tableauart/tableauart.jpeg'
import thumbMarket from '../public/images/projects/market/market.jpeg'
import thumbRetino from '../public/images/projects/retino/retino.jpg'
import thumbEsi2a from '../public/images/projects/esi2a/esi2a.jpeg'
import thumbSofafer from '../public/images/projects/sofafer/sofafer.jpeg'
import thumbLang2Go from '../public/images/projects/lang2go/lang2go.jpeg'




const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem
            id="artdecor"
            thumbnail={thumbArtdecor}
            title="Artdecor"
          >
            A web store for Wall Art and paintings.
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
        <Section delay={.1}>
          <ProjectGridItem
            id="esi2a"
            thumbnail={thumbEsi2a}
            title="esi2a"
          >
            
            Engineering school website.
          </ProjectGridItem>
        </Section>
        <Section delay={.1}>
          <ProjectGridItem
            id="sofafer"
            thumbnail={thumbSofafer}
            title="Sofafer"
          >
            iron manufactury website.
          </ProjectGridItem>
        </Section>
        <Section delay={.2}>
          <ProjectGridItem
            id="lang2go"
            thumbnail={thumbLang2Go}
            title="Lang2Go"
          >
            Translation website.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Academic projects.
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <ProjectGridItem
            id="market"
            thumbnail={thumbMarket}
            title="Market"
          >
            Web application for C2C E-commerce
          </ProjectGridItem>
        </Section>
        <Section delay={0.3}>
          <ProjectGridItem
            id="retino"
            thumbnail={thumbRetino}
            title="Retino"
          >
            A mobile app for diabetic retinopathy detection and data collection.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../comps/chakra'
