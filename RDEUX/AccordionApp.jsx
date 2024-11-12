import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

const initialState = {

  sections: {
    section1: false,
    section2: false,
    section3: false
  }
};




// Step 3: Define action creators
const toggleSection = (section) => ({
  type: 'TOGGLE_SECTION',
  payload: section
});

// Step 4: Define the reducer
const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SECTION':
      // Toggle the state of the selected section
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.payload]: !state.sections[action.payload]
        }
      };
    default:
      return state;
  }
};


const store = createStore(accordionReducer);


const Accordion = () => {
  const sections = useSelector((state) => state.sections); 
  const dispatch = useDispatch();

  const handleToggle = (section) => {
    dispatch(toggleSection(section));
  };


  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    header: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333'
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '5px',
      fontSize: '18px',
      color: '#333'
    },
    sectionHeaderActive: {
      backgroundColor: '#ddd',
    },
    content: {
      backgroundColor: '#fafafa',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '10px'
    },
    icon: {
      fontSize: '20px',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>REDUX ACCORDION</h1>

      <div>
        <div
          style={{
            ...styles.sectionHeader,
            ...(sections.section1 ? styles.sectionHeaderActive : {})
          }}
          onClick={() => handleToggle('section1')}
        >
          <span>Section 1</span>
          <span style={styles.icon}>
            {sections.section1 ? '×' : '+'}
          </span>
        </div>
        {sections.section1 && (
          <div style={styles.content}>This is the content of Section 1</div>
        )}
      </div>

      <div>
        <div
          style={{
            ...styles.sectionHeader,
            ...(sections.section2 ? styles.sectionHeaderActive : {})
          }}
          onClick={() => handleToggle('section2')}
        >
          <span>Section 2</span>
          <span style={styles.icon}>
            {sections.section2 ? '×' : '+'}
          </span>
        </div>
        {sections.section2 && (
          <div style={styles.content}>This is the content of Section 2</div>
        )}
      </div>

      <div>
        <div
          style={{
            ...styles.sectionHeader,
            ...(sections.section3 ? styles.sectionHeaderActive : {})
          }}
          onClick={() => handleToggle('section3')}
        >
          <span>Section 3</span>
          <span style={styles.icon}>
            {sections.section3 ? '×' : '+'}
          </span>
        </div>
        {sections.section3 && (
          <div style={styles.content}>This is the content of Section 3</div>
        )}
      </div>
    </div>
  );
};


const AccordionApp = () => (
  <Provider store={store}>
    <Accordion />
  </Provider>
);

export default AccordionApp;
