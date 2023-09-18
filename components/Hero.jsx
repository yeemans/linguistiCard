import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      LinguistiCard: Flashcards for languages
    </h1>

    <p className="lead" data-testid="hero-lead">
      Start by searching for or creating flashcards.
    </p>
  </div>
);

export default Hero;
