import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Hook customizado para criar efeito de digitação e apagamento de texto
 * Simula uma pessoa digitando e apagando texto em loop
 */
export const useTypingEffect = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
}: UseTypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Cursor piscando
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const handleTyping = () => {
      if (!isDeleting) {
        // Modo digitando
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
          timeout = setTimeout(handleTyping, typingSpeed);
        } else {
          // Terminou de digitar, pausa antes de começar a apagar
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        // Modo apagando
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1));
          timeout = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Terminou de apagar, pausa antes de começar a digitar novamente
          timeout = setTimeout(() => {
            setIsDeleting(false);
          }, 500);
        }
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, showCursor };
};
