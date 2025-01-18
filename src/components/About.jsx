import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import {SectionWrapper} from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return(
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("rigth", "spring", 0.5*index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un Développeur Fullstack maîtrisant les languages
        JAVA et PHP pour le développement côté Backend. Je dispose
        des expériences confirmés dans le développement des API Rest avec 
        les frameworks PHP Symfony et Spring Boot Java. J'ai déjà réalisé plusieurs
        projets concluant en développant des applications avec Symfony Twig et Spring MVC.
        ReactJS est cependant la librairie que je me parfait depuis mes premières exepriences
        pour le développement des interfaces utilisateurs notamment pour être plus rapides et pour
        mieux séparés la réalisation FrontEnd avec le BanckEnd.
        Alors pourquoi hésitez à me contacter pour réaliser vos projets !
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index}  
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");