/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Authority from './components/Authority';
import Cases from './components/Cases';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-light-50 font-sans selection:bg-gold-500/30 selection:text-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Authority />
        <Cases />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
