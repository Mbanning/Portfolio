import React from 'react';

const FullScreenSection = (props) => {

  const { container, text } = styles;

  return (
    <div style={Object.assign({}, container, props.style)}>
      <div>
        {props.children}
      </div>
    </div>)
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3368F3',
    height: window.innerHeight - 40,
    width: window.innerWidth - 40,
    padding: 20,
  },
}

export default FullScreenSection;