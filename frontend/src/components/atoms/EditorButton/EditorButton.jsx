import './EditorButton.css';

const EditorButton = ({ isActive }) => {
  const handleClick = () => {
    // TODO: Implement click handler
  };

  return (
    <button
      className='editor-button'
      style={{
        color: isActive ? 'white' : '#959eba',
        backgroundColor: isActive ? '#282837' : '#4a4859',
        borderTop: isActive ? '1px solid #ff79c8' : 'none',
      }}
      onClick={handleClick}
    >
      file.js
    </button>
  );
};

export default EditorButton;
