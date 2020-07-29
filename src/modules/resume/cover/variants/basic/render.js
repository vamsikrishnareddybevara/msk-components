import React from 'react';

const useStyles = () => ({
  root: {
    display: 'flex'
  },
  coverDiv: {
    paddingTop: 40,
    width: '100%'
  },
  detailsWrapper: {
    padding: 20,
    textAlign: 'left'
  },
  name: {
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold'
  },
  designation: {
    margin: 0
  },
  company: {
    margin: 0
  },
  contactDetails: {
    marginTop: 10
  },
  emailId: {},
  phoneNo: {},
  contactDetailsItemLabel: {
    fontWeight: 'bold'
  }
});

const Basic = ({ theme, name, designation, company, emailId, phoneNo }) => {
  const styles = useStyles();
  return (
    <div style={styles.root}>
      <div
        style={{
          ...styles.coverDiv,
          backgroundColor: theme.value.color,
          color: theme.value.contrast
        }}
      >
        <div style={styles.detailsWrapper}>
          <div style={styles.name}>{name.value}</div>
          <h3 style={styles.designation}>{designation.value}</h3>
          <h4 style={styles.company}>{company.value}</h4>

          <div style={styles.contactDetails}>
            {emailId.value && (
              <div>
                <span style={styles.contactDetailsItemLabel}>Email: </span>
                <span style={styles.emailId}>{emailId.value}</span>
              </div>
            )}
            {phoneNo.value && (
              <div>
                <span style={styles.contactDetailsItemLabel}>Ph: </span>
                <span style={styles.phoneNo}>{phoneNo.value}</span>
              </div>
            )}
          </div>
        </div>

        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
};

export default Basic;
