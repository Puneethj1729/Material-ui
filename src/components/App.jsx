import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Toolbar,
  CssBaseline,
  Container,
  Button
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';
const cards=[1,2,3,4,5,6,7,8,9,10,11,12];
function App() {
    const classes=useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.container} maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Grid
              className={classes.buttons}
              container
              spacing={2}
              justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  Primary
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='primary'>
                  Secondary
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container maxWidth='md' className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      Post {card}
                    </Typography>
                    <Typography variant='body2'>
                      Lorem ipsum dolor sit amet,ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography color="textPrimary" gutterBottom variant="h5" align="center">
              Footer
          </Typography>
          <Typography color="textSecondary" variant="body2" align="center">
           Copyright @ 2021 Puneethjnv

          </Typography>
      </footer>
    </>
  );
}
export default App;
