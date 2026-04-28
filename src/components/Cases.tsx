import { motion, AnimatePresence } from 'motion/react';
import { Headphones, Scale, Gavel, BookOpen } from 'lucide-react';
import { useState } from 'react';
import RevealText from './RevealText';

const tabs = ['Podcast', 'Repercussão', 'Sustentação Oral'] as const;
type Tab = (typeof tabs)[number];

const podcastTopics = [
  {
    icon: Scale,
    title: 'PL da Dosimetria',
    description: 'Análise técnica dos impactos e críticas ao projeto sobre dosimetria penal.',
  },
  {
    icon: Gavel,
    title: 'Garantias Fundamentais',
    description: 'Defesa das garantias constitucionais e do devido processo legal.',
  },
  {
    icon: BookOpen,
    title: 'Reformas Penais',
    description: 'Debate sobre reformas no sistema penal brasileiro e seus efeitos práticos.',
  },
];

const prints = [
  {
    outlet: 'Terra',
    caption: 'Análise do PL da Dosimetria e seus efeitos sobre condenações por crimes graves',
    image: '/images/repercussao/dosimetria.png',
  },
  {
    outlet: 'Terra',
    caption: 'Prisão domiciliar humanitária temporária: por que especialistas rebatem a tese',
    image: '/images/repercussao/prisao.png',
  },
  {
    outlet: 'Mídia Jurídica',
    caption: 'Crítica técnica ao alcance ampliado do PL da Dosimetria',
    image: '/images/repercussao/critica.png',
  },
  {
    outlet: 'Imprensa Nacional',
    caption: 'Comentários sobre dosimetria penal e o caso de repercussão nacional',
    image: '/images/repercussao/imprensa.png',
  },
  {
    outlet: 'Entrevistas',
    caption: 'Participação em debates sobre reformas no sistema penal brasileiro',
    image: '/images/repercussao/entrevistas.png',
  },
  {
    outlet: 'Repercussão',
    caption: 'Análise técnica de decisões e teses de grande impacto social',
    image: '/images/repercussao/analise.png',
  },
];

export default function Cases() {
  const [activeTab, setActiveTab] = useState<Tab>('Podcast');

  return (
    <section id="casos" className="py-20 md:py-28 bg-light-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold-700 text-xs font-semibold uppercase tracking-widest mb-3">
            Presença & Autoridade
          </p>
          <RevealText as="h2" className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-4">
            Direito é <span className="text-gold-500">Lógica</span>
          </RevealText>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conhecimento que vai além dos autos — análise, comunicação e defesa de alto nível
            reconhecidos fora e dentro dos tribunais.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeTab === tab ? 'text-dark-900' : 'text-gray-500 hover:text-dark-800'
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-gold-400 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.45 }}
                />
              )}
              <span className="relative">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">

          {/* ── PODCAST ── */}
          {activeTab === 'Podcast' && (
            <motion.div
              key="podcast"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header above the player */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full">
                  <Headphones className="w-3.5 h-3.5 text-gold-500" />
                  <span className="text-gold-700 text-[11px] font-semibold uppercase tracking-widest">
                    No ar
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark-900 mb-2">
                  Podcast Jurídico
                </h3>
                <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
                  Análise técnica de casos, teses e reformas no sistema penal brasileiro.
                </p>
              </div>

              {/* YouTube embed */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-dark-900/30 border border-dark-900/5 bg-dark-900">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/_Bo8tWsz0wE"
                    title="Podcast Jurídico — Cristiano Lázaro"
                    className="w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Topics below the player */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {podcastTopics.map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-gold-400/30 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 group-hover:bg-gold-400 flex items-center justify-center mb-3 transition-colors duration-300">
                      <topic.icon className="w-5 h-5 text-gold-500 group-hover:text-dark-900 transition-colors" />
                    </div>
                    <p className="font-serif font-bold text-dark-900 text-sm mb-1.5">
                      {topic.title}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {topic.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── PRINTS DE REPERCUSSÃO ── */}
          {activeTab === 'Repercussão' && (
            <motion.div
              key="prints"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {prints.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.93 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/70 hover:border-gold-400/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Thumbnail image */}
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />

                      {/* Outlet badge */}
                      <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-sm border border-gold-400/20 px-2.5 py-1 rounded-full">
                        <span className="text-gold-400 text-[10px] font-semibold uppercase tracking-wider">
                          {item.outlet}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-[10px] text-gold-700 font-semibold uppercase tracking-widest mb-1">
                        Caso de Repercussão
                      </p>
                      <p className="text-sm font-medium text-dark-900 line-clamp-2 leading-snug">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>


            </motion.div>
          )}

          {/* ── VÍDEO SUSTENTAÇÃO ORAL ── */}
          {activeTab === 'Sustentação Oral' && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* Header above the player */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-gold-400/10 border border-gold-400/20 rounded-full">
                  <Gavel className="w-3.5 h-3.5 text-gold-500" />
                  <span className="text-gold-700 text-[11px] font-semibold uppercase tracking-widest">
                    Tribunal
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark-900 mb-2">
                  Sustentação Oral
                </h3>
                <p className="text-gray-600 text-sm max-w-xl mx-auto leading-relaxed">
                  Atuação técnica e combativa nos tribunais, com domínio da oratória jurídica
                  e defesa estratégica de alto impacto.
                </p>
              </div>

              {/* YouTube embed */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-dark-900/30 border border-dark-900/5 bg-dark-900">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/TfBbET-Qq7o"
                    title="Sustentação Oral — Cristiano Lázaro"
                    className="w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Topics below the player */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  {
                    icon: Gavel,
                    title: 'Defesa nos Tribunais',
                    description: 'Sustentação oral estratégica perante os Tribunais de Justiça e Tribunais Superiores.',
                  },
                  {
                    icon: Scale,
                    title: 'Oratória Jurídica',
                    description: 'Comunicação persuasiva e técnica refinada na defesa dos interesses do cliente.',
                  },
                  {
                    icon: BookOpen,
                    title: 'Teses de Impacto',
                    description: 'Construção de teses sólidas e argumentação de alto nível em plenário.',
                  },
                ].map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-gold-400/30 hover:shadow-lg hover:shadow-gray-200/60 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-400/10 group-hover:bg-gold-400 flex items-center justify-center mb-3 transition-colors duration-300">
                      <topic.icon className="w-5 h-5 text-gold-500 group-hover:text-dark-900 transition-colors" />
                    </div>
                    <p className="font-serif font-bold text-dark-900 text-sm mb-1.5">
                      {topic.title}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {topic.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
