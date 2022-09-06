import {
  CloseIcon
} from '@chakra-ui/icons'
import {
  Container,
  Heading,
  Stack,
  Input,
  useColorModeValue,
  Textarea,
  Box,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { AiOutlineSend } from 'react-icons/ai'
import Layout from '../comps/layouts/article'
import Section from '../comps/section'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: function (values , actions) {
      console.log(values)

      emailjs.send('your_service_id', 'template_id', values, 'your_public_key')
      .then(() => {

          toast.closeAll()
          toast({
            title: 'Success !',
            description: "Your email was sent successfully.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })    

          actions.setSubmitting(false)
          actions.resetForm();

      }, () => {

          toast.closeAll()
          toast({
            title: 'Oops !',
            description: "An error has occurred, try again later.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })    
          actions.setSubmitting(false)
      });

    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      message: Yup.string().required()
    })
  })

  return (
    <Layout title="Contact">
      <Container>
        <Heading as="h3" fontSize={20} my={8}>
          Contact
        </Heading>

        <Section delay={0.1}>
          <form onSubmit={formik.handleSubmit} noValidate>
            <Stack minH="60vh" spacing={[3, 5, 8]}>
              <InputGroup>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  backgroundColor={useColorModeValue('#F0E7DB', '#000')}
                  borderWidth={1.5}
                  borderColor={useColorModeValue('#000', 'glassTeal')}
                  _placeholder={{
                    opacity: 0.5,
                    color: useColorModeValue('#000', 'glassTeal')
                  }}
                  variant="filled"
                  placeholder="Your email"
                  size={['md', 'lg']}
                />
                {formik.touched.email && formik.errors.email && (
                  <InputRightElement
                    // eslint-disable-next-line react/no-children-prop
                    children={<CloseIcon fontSize={'.7em'} color="red.500" />}
                  />
                )}
              </InputGroup>
              {formik.touched.email && formik.errors.email && (
                <Text
                  style={{
                    marginTop: '0px',
                    color: 'red',
                    marginLeft: '4px'
                  }}
                >
                  {formik.errors.email}
                </Text>
              )}

              <InputGroup>
                <Input
                  id="name"
                  name="name"
                  type="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  backgroundColor={useColorModeValue('#F0E7DB', '#000')}
                  borderWidth={1.5}
                  borderColor={useColorModeValue('#000', 'glassTeal')}
                  _placeholder={{
                    opacity: 0.5,
                    color: useColorModeValue('#000', 'glassTeal')
                  }}
                  variant="filled"
                  placeholder="Your full name"
                  size={['md', 'lg']}
                />
                {formik.touched.name && formik.errors.name && (
                  <InputRightElement
                    // eslint-disable-next-line react/no-children-prop
                    children={<CloseIcon fontSize={'.7em'} color="red.500" />}
                  />
                )}
              </InputGroup>
              {formik.touched.name && formik.errors.name && (
                <Text
                  style={{
                    marginTop: '0px',
                    color: 'red',
                    marginLeft: '4px'
                  }}
                >
                  {formik.errors.name}
                </Text>
              )}

              <InputGroup>
                <Textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  backgroundColor={useColorModeValue('#F0E7DB', '#000')}
                  borderWidth={1.5}
                  borderColor={useColorModeValue('#000', 'glassTeal')}
                  _placeholder={{
                    opacity: 0.5,
                    color: useColorModeValue('#000', 'glassTeal')
                  }}
                  variant="filled"
                  placeholder="Leave your message here ..."
                  size={['lg']}
                  minH="150px"
                />
                {formik.touched.message && formik.errors.message && (
                  <InputRightElement
                    // eslint-disable-next-line react/no-children-prop
                    children={<CloseIcon fontSize={'.7em'} color="red.500" />}
                  />
                )}
              </InputGroup>
              {formik.touched.message && formik.errors.message && (
                <Text
                  style={{
                    marginTop: '0px',
                    color: 'red',
                    marginLeft: '4px'
                  }}
                >
                  {formik.errors.message}
                </Text>
              )}

              <Box align="right" my={4}>
                <Button
                  type="submit"
                  rightIcon={<AiOutlineSend />}
                  colorScheme="teal"
                  isLoading={formik.isSubmitting}
                >
                  Send
                </Button>
              </Box>
            </Stack>
          </form>
        </Section>
      </Container>
    </Layout>
  )
}
export default Contact
