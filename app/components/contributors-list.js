import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Flex from '@common-components/flex';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Divider, Tooltip } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  contributorPaper: {
    userSelect: 'none',
    // marginLeft: 300,
    marginBottom: 100,
    transition: 'all .2s linear'
  }
});

function ContributorsList({ contributors }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Flex />
      <Box
        style={{
          width: '100%',
          padding: 20
        }}
        className={classes.contributorPaper}
        elevation={0}
      >
        <Typography style={{ textAlign: 'center' }} variant="h5" gutterBottom>
          {contributors.length} Contributors
        </Typography>
        <Divider />
        <br />

        {contributors.map((contributor) => {
          return (
            <div
              key={contributor.email}
              style={{
                display: 'inline-block',
                padding: 10
              }}
            >
              <a target="_blank" rel="noreferrer" href={contributor.url}>
                <Tooltip title={<span>{contributor.name}</span>}>
                  <Avatar
                    style={{
                      width: 100,
                      height: 100,
                      border: '5px solid rgb(19.3%, 27.7%, 59.7%)'
                    }}
                    alt={contributor.name[0]}
                    src={`${contributor.url}.png`}
                  />
                </Tooltip>
              </a>
            </div>
          );
        })}
      </Box>

      <Flex />
    </div>
  );
}

export default ContributorsList;
