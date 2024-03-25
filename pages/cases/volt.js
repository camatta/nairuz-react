import Head from "next/head";

import Headergeral from "../../components/Headergeral";
import HeaderMob from "../../components/HeaderMob";
import Footergeral from "../../components/Footergeral";
import NewsletterNz from "../../components/NewsletterNz";

import MainBanner from "../../components/Volt/MainBanner";
import VoltSpieler from "../../components/Volt/VoltSpieler";
import Projects from "../../components/Volt/Projects";
import FormCase from "../../components/Volt/FormCase";
import Challenges from "../../components/Volt/Challenges";
import ProjectSummary from "../../components/Volt/ProjectSummary";

export default function Volt() {
  return (
    <>
    <Head>
        <title>A Nairuz entrou em campo!</title>
        <meta name="description" content="2024 começou com a nossa escalação em um super projeto em parceria com a Volt e Spieler." />
        <meta property="og:image" content="https://nairuz.com.br/og-nairuz.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="600" />
				<meta property="og:image:height" content="400" />
        <meta property="og:description" content="2024 começou com a nossa escalação em um super projeto em parceria com a Volt e Spieler." />
				<meta property="og:site_name" content="Nairuz Agência de Marketing Digital e Tecnologia" />
				<meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    </Head>

    <Headergeral />
    <HeaderMob />

    <main className="page-cases case-volt-spieler">
      <MainBanner />
      <VoltSpieler />
      <Projects />
      <FormCase />
      <Challenges />
      <ProjectSummary />
      <NewsletterNz />
    </main>

    <Footergeral />
    </>
  )
}