import styled from 'styled-components';

const VideoModalStyles = styled.div`
  position: fixed;
  inset: 0;
  // above the navbar (1001) so the close button isn't covered
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.85);
  .modal-content {
    position: relative;
    width: 100%;
    max-width: 960px;
    video {
      display: block;
      width: 100%;
      max-height: 80vh;
      border-radius: var(--radius);
      background-color: #000;
    }
  }
  .close-btn {
    position: absolute;
    top: -2.75rem;
    right: 0;
    padding: 0.25rem 0.5rem;
    border: 0;
    background: none;
    color: #fff;
    font-size: 1.75rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
    // let the button, not the icon, receive the hover so the pointer shows
    svg {
      pointer-events: none;
    }
  }
`;
export default VideoModalStyles;
