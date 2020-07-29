import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const getSkillValue = (title, percent) => ({
  name: 'Skill',
  type: propertyTypes.OBJECT,
  required: true,
  value: {
    type: propertyTypes.OBJECT,
    percent: {
      name: 'Skill Percent',
      type: propertyTypes.NUMBER,
      value: percent,
      required: true
    },
    title: {
      name: 'Skill Title',
      type: propertyTypes.STRING,
      value: title,
      required: true
    }
  }
});

const properties = {
  theme: {
    name: 'Theme',
    required: true,
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue
  },
  headlineText: {
    required: true,
    value: 'Skill Set',
    name: 'Headline text',
    type: propertyTypes.STRING
  },
  skills: {
    name: 'Skills',
    required: true,
    type: propertyTypes.ARRAY,
    value: [
      getSkillValue('Skill 1', 15),
      getSkillValue('Skill 2', 30),
      getSkillValue('Skill 3', 45),
      getSkillValue('Skill 4', 60),
      getSkillValue('Skill 5', 75),
      getSkillValue('Skill 6', 90)
    ]
  }
};

export default properties;
