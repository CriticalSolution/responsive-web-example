const useStyles =  theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: 'rgba(255, 255, 255, 1)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  rootForCart: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '75%',
    backgroundColor: "black",
    color: "#37E8F4",
  },
  media: {
    height: 250,
  },
});

export {useStyles};