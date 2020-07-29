import React from 'react';

const useStyles = (theme) => ({
  root: {
    margin: 0,
    padding: '20px 20px 30px 20px'
  },
  noMargin: {
    margin: 0
  },
  hr: {
    marginBottom: 0
  },
  mainWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'start'
  },
  itemWrapper: {
    display: 'flex',
    marginRight: 40,
    alignItems: 'center',
    flexDirection: 'column'
  },
  titleWrapper: {
    fontSize: 15,
    padding: '20px 0px 6px 0px'
  },
  progressWrapper: {
    position: 'relative',
    display: 'inline-block'
  },
  circleText: {
    margin: 0,
    top: '51%',
    left: '50%',
    fontWeight: 'bold',
    position: 'absolute',
    transform: 'translate3d(-50%, -50%, 0)'
  },
  circle: {
    fill: 'transparent',
    strokeLinecap: 'round',
    stroke: theme.value.color,
    transform: 'rotate(90deg)',
    transformOrigin: 'center center',
    transition: 'all 0.2s ease-in-out'
  }
});

const Circular = ({ theme, headlineText, skills }) => {
  const styles = useStyles(theme);

  function circularProgress(progress, size = 48, stroke = 6) {
    const radius = () => (size - stroke) / 2;

    const circumf = () => 2 * Math.PI * radius();

    const normalizedProgress = (p) => (p <= 0 ? 0 : p >= 100 ? 100 : p);

    const strokeDashArray = () => `${circumf()} ${circumf()}`;

    const strokeDashOffset = () => {
      const circ = circumf();
      return circ - (normalizedProgress(progress) / 100) * circ;
    };

    return (
      <div style={{ height: `${size}px`, width: `${size}px` }}>
        <svg height={size} width={size}>
          <circle
            r={radius()}
            cx={size / 2}
            cy={size / 2}
            strokeWidth={stroke}
            style={styles.circle}
            strokeDasharray={strokeDashArray()}
            strokeDashoffset={strokeDashOffset()}
          />
        </svg>
        <div style={{ fontSize: `${radius() - 6}px`, ...styles.circleText }}>
          {normalizedProgress(progress)}
        </div>
      </div>
    );
  }

  function skillItem({ title, percent }, index) {
    return (
      <div key={index} style={styles.itemWrapper}>
        <div style={styles.titleWrapper}>{title.value}</div>
        <div style={styles.progressWrapper}>
          {circularProgress(percent.value)}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      <h1 style={styles.noMargin}>{headlineText.value}</h1>
      <hr style={styles.hr} />
      {skills.value.length && (
        <div style={styles.mainWrapper}>
          {skills.value.map((skill, index) => skillItem(skill.value, index))}
        </div>
      )}
    </div>
  );
};

export default Circular;
