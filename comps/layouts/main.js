import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import LaptopLoader from '../laptop-loader'

const LazyLaptop = dynamic(() => import('../laptop'), {
  ssr: false,
  loading: () => <LaptopLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Azziti's homepage" />
        <meta name="author" content="Azziti Hamza" />
        <link rel="tarbouche-icon" href="tarbouche-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:site_name" content="Azziti Hamza" />
        <meta name="og:title" content="Azziti Hamza" />
        <meta property="og:type" content="website" />
        <title>Azziti Hamza - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyLaptop />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
