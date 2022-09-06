import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt='3em'>
      &copy; {new Date().getFullYear()} Azziti Hamza. All Rights Reserved.
    </Box>
  )
}

export default Footer
