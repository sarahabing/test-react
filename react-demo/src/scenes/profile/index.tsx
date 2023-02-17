import { Box, Button, TextField } from '@mui/material'
import { Header } from '../../components/Header'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import { colors } from '../../theme'

function Profile(): JSX.Element {
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const phoneRegex =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

  const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('Invalid email').required('required'),
    contact: yup
      .string()
      .matches(phoneRegex, 'Phone number is not valid')
      .required('required'),
    addressOne: yup.string().required('required'),
    addressTwo: yup.string().required('required'),
    city: yup.string().required('required'),
    state: yup.string().required('required'),
    zip: yup.string().required('required')
  })

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: ''
  }

  const handleFormSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='profile' subtitle='Create a new user.' />
      </Box>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              bgcolor={colors.primary[900]}
              p='20px'
              gap='30px'
              gridTemplateColumns='repeat(4,minmax(0,1fr))'
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Contact Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address One'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.addressOne}
                name='addressOne'
                error={!!touched.addressOne && !!errors.addressOne}
                helperText={touched.addressOne && errors.addressOne}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address Two'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.addressTwo}
                name='addressTwo'
                error={!!touched.addressTwo && !!errors.addressTwo}
                helperText={touched.addressTwo && errors.addressTwo}
                sx={{ gridColumn: 'span 4' }}
              />
              <TextField
                variant='filled'
                type='text'
                label='City'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name='city'
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                variant='filled'
                type='text'
                label='State'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name='state'
                error={!!touched.state && !!errors.state}
                helperText={touched.state && errors.state}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                variant='filled'
                type='text'
                label='Zip Code'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zip}
                name='zip'
                error={!!touched.zip && !!errors.zip}
                helperText={touched.zip && errors.zip}
                sx={{ gridColumn: 'span 1' }}
              />
              <Button
                type='submit'
                color='secondary'
                variant='contained'
                sx={{ gridColumn: 'span 2' }}
              >
                Create New User
              </Button>
              <Button
                type='button'
                color='info'
                variant='contained'
                sx={{ gridColumn: 'span 2' }}
              >
                Clear
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default Profile
