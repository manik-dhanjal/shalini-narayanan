import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import VideoModalStyles from './video-modal.styles';
import { VideoModalProps } from './video-modal.interface';

const VideoModal: React.FC<VideoModalProps> = ({ src, title, onClose }) => {
  // close on Escape and stop the page scrolling behind the popup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <VideoModalStyles role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-btn" aria-label="Close video" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <video src={src} controls autoPlay playsInline />
      </div>
    </VideoModalStyles>,
    document.body
  );
};
export default VideoModal;
