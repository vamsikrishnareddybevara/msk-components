import React from 'react';

const useStyles = () => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  skillContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  skill: {
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block',
    fontWeight: 800
  },
  percentContainer: {
    width: 150,
    height: 12,
    border: '1px solid #000'
  },
  percent: {
    height: '100%'
  }
});

const Column = ({ theme, headlineText, skills }) => {
  const styles = useStyles();

  const getSkills = () => {
    return skills.value.map((skill) => {
      let percent = skill.percent.value;
      if (percent > 100) {
        percent = 100;
      } else if (percent < 1) {
        percent = 0;
      }
      return (
        <div style={styles.skillContainer}>
          <div style={styles.skill}>{skill.skillName.value}</div>
          <div style={styles.percentContainer}>
            <div
              style={{
                ...styles.percent,
                backgroundColor: theme.value.color,
                width: `${percent}%`
              }}
            ></div>
          </div>
        </div>
      );
    });
  };

  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div style={styles.skillsContainer}>{getSkills()}</div>
    </div>
  );
};

export default Column;
