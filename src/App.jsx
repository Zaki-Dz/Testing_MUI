import 
{
  Typography, AppBar, Card, CardActions, CardContent, 
  CardMedia, CssBaseline, Grid, Toolbar, Container, Button
} 
from '@mui/material'
import { styled } from '@mui/material/styles'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <SPhotoCameraIcon />

          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <SContainer maxWidth='sm'>
            <STypography 
              variant='h2' 
              align='center' 
              color='textPrimary' 
              gutterBottom
            >
              Photo Album
            </STypography>

            <Typography 
              variant='h5' 
              align='center' 
              color='textSecondary' 
              paragraph
            >
              Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Illum modi repellendus quasi ea ab veniam explicabo sint numquam quisquam quidem, optio ullam doloribus, eveniet nesciunt rem fugit voluptatibus! Numquam, velit.
            </Typography>

            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <Button variant='contained'>See My Photos</Button>
              </Grid>

              <Grid item>
                <Button variant='outlined'>Secondary Action</Button>
              </Grid>
            </Grid>
          </SContainer>

          <Container maxWidth='md'>
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Card>
                  <CardMedia 
                    component='img'
                    image='https://source.unsplash.com/random'
                    height='200'
                  />

                  <CardContent>
                    <Typography variant='h5' gutterBottom>
                      Heading
                    </Typography>

                    <Typography variant='h5' gutterBottom>
                      This is a media card description
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size='small'>View</Button>

                    <Button size='small'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item sm={6}>
                <Card>
                  <CardMedia 
                    component='img'
                    image='https://source.unsplash.com/random'
                    height='200'
                  />

                  <CardContent>
                    <Typography variant='h5' gutterBottom>
                      Heading
                    </Typography>

                    <Typography variant='h5' gutterBottom>
                      This is a media card description
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size='small'>View</Button>

                    <Button size='small'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>

      <footer style={styles.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>

        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Text
        </Typography>
      </footer>
    </>
  )
}

export default App

const SPhotoCameraIcon = styled(PhotoCameraIcon)`
  margin-right: 1rem;
`

const SContainer = styled(Container)`
  margin-bottom: 2rem;
`

const STypography = styled(Typography)`
  margin-top: 2rem;
`

const styles = {
  footer: {
    marginTop: '2rem',
    paddingBlock: '2rem',
    backgroundColor: '#1976d2',
    color: 'white'
  }
}