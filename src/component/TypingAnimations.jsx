import { TypeAnimation } from 'react-type-animation';

const WishAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Happy Birthday Prendu..',
        2000, 
        'Happy Birthday Rakshindha..',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default WishAnimation;