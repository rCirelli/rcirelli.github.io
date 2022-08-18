import { connect } from 'react-redux';
import { languages } from '../languages';

const translate = (text, language) => {
  if (Object.keys(languages).includes(language)) {
    return languages[language][text] || text;
  }
  return text;
};

function Translate({ children, language }) {
  return translate(children, language);
}

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps)(Translate);
