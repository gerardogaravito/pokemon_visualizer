'use client';
import { Avatar, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './bio.module.scss';
import Link from 'next/link';
import NavigateNext from '@mui/icons-material/NavigateNext';

export default function Bio() {
  const handleNavigation = () => {
    window.open('https://garavito.dev', '_blank');
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__header}>
        <Link className={styles.home} href={'/'}>
          ← go home
        </Link>
        <Avatar
          sx={{ width: 100, height: 100 }}
          alt='gerardo garavito'
          src='/img/chicago_tv.jpg'
        />
      </div>
      <Typography
        variant='h1'
        component='h2'
        className={styles.container__title}
      >
        gerardo garavito
      </Typography>
      <Typography variant='body1' component='p' textAlign={'justify'}>
        Software Engineer graduated from the Universidad Autónoma de Nuevo León.
        I specialize in web application development using technologies such as
        React, NextJS, and VueJS, as well as mobile apps built with React
        Native. I prefer TypeScript as a programming language. <br /> <br />I
        was part of the Platzi Master program for 2 years, between 2020 and
        2022, where I specialized in Front-End development. Subsequently, from
        February 2021 until the end of 2022, I was a member of the Tech Team at
        Vitau, a startup affiliated with Y Combinator. There, I led the
        development team of the Mobile App, achieving over 11,000 active users.
        Currently, I am a member of the Tech Team at Efevoo Group, where I am
        responsible for maintaining and developing features for Efevoopay and
        Wirebit Digital products. I recently completed a migration of the core
        of the Wirebit mobile app, transitioning it from React Native without a
        framework to React Native with Expo, to facilitate the development of
        new features.
        <br />
        <br /> I am passionate about web development with a visual focus (as
        seen on my website: garavito.dev), the iterative flow of ideas in
        startup environments, design, and learning about technology.
      </Typography>
      <Button
        className={styles.webButton}
        variant='outlined'
        endIcon={<NavigateNext />}
        onClick={handleNavigation}
      >
        visit garavito.dev
      </Button>
    </section>
  );
}
