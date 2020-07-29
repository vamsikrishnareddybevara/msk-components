import React from 'react';

const useStyles = (theme) => ({
  root: {
    display: 'flex',
    paddingBottom: 20,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  mainWrapper: {
    minWidth: '50%',
    color: theme.value.contrast,
    padding: '20px 30px 60px 30px',
    backgroundColor: theme.value.color,
    clipPath: 'polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0)'
  },
  name: {
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold'
  },
  designation: {
    margin: 0,
    fontSize: 20
  },
  company: {
    margin: 0
  },
  imageWrapper: {
    padding: 20
  },
  imageImage: {
    width: 200,
    minHeight: 200,
    borderRadius: '50%'
  },
  companyWrapper: {
    fontSize: 16,
    maxWidth: '60%',
    margin: '0px auto'
  }
});

const Flag = ({ theme, name, company, imageUrl, designation }) => {
  const styles = useStyles(theme);

  return (
    <div style={styles.root}>
      <div style={styles.mainWrapper}>
        <div style={styles.imageWrapper}>
          <img
            style={{
              ...styles.imageImage,
              border: `5px solid ${theme.value.contrast}`
            }}
            src={imageUrl.value}
          />
        </div>
        <div style={styles.name}>{name.value}</div>
        {designation.value && (
          <h3 style={styles.designation}>{designation.value}</h3>
        )}
        {company.value && (
          <div style={styles.companyWrapper}>
            <div>—</div>
            <h4 style={styles.company}>{company.value}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flag;
