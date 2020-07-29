import React from 'react';

const useStyles = (theme) => ({
  root: {
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  link: {
    maxWidth: 300,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
    fontSize: 15,
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  svg: {
    width: '32px',
    height: '32px',
    verticalAlign: 'middle',
    fill: theme.value.contrast
  },
  anchor: {
    marginLeft: '5px'
  }
});

const Basic = ({ theme, headlineText, links }) => {
  const styles = useStyles(theme);
  return (
    <div style={styles.root}>
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      <br />
      <div>
        {links.value.map((link) => {
          return (
            <div
              key={link.value}
              style={{
                ...styles.link,
                backgroundColor: theme.value.color,
                color: theme.value.contrast
              }}
            >
              <svg viewBox={link.viewBox} style={{ ...styles.svg }}>
                {link.platform.map((path) => (
                  <path key={path} d={path} />
                ))}
              </svg>
              <a
                style={{ ...styles.anchor, color: theme.value.contrast }}
                href={link.value}
                rel="noreferrer"
                target="_blank"
              >
                {link.value}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basic;
