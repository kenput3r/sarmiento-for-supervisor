/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight as Right } from 'react-icons/fi';
import Layout from '../components/layout';
import article1 from '../images/articles/Correro-Bolivian-Mayor-8-12-20.jpg';
import article2 from '../images/articles/LA-Times-Candidacy-Announcement-1-13-22.jpg';
import article4 from '../images/articles/LA-Times-Tobacco-Ban-3-2-22.jpg';
import article5 from '../images/articles/Telemundo-$300-Stimulus-11-17-21.jpg';
import article6 from '../images/articles/Telemundo-Tabacco-Ban-3-16-22.jpg';
import article7 from '../images/articles/Voice-of-OC-Free-Public-Transit-2-17-22.jpg';
import article8 from '../images/articles/Voice-of-OC-Public-Health-Dept-3-14-22.jpg';
import article9 from '../images/articles/Voice-of-OC-Rent-Control-9-22-21.jpg';
import article10 from '../images/articles/Voice-of-OC-Vaccination-Efforts-1-29-21.jpg';
import article11 from '../images/articles/WaPo-Health-Disparaties-3-7-22.jpg';
import article12 from '../images/articles/Press-Releases.jpg';
import article13 from '../images/articles/ABC-7-New-SA-Jobs.jpg';
import article14 from '../images/articles/emergency-homeless-shelter.jpg';
import article15 from '../images/articles/endorsed-by-oc-register.png';
import article16 from '../images/articles/santa-ana-stops-county-shelter.jpg';

const articles = [
  {
    image: article15,
    link: 'https://www.ocregister.com/2022/10/10/endorsement-vicente-sarmiento-for-oc-board-of-supervisors/',
  },
  {
    image: article16,
    link: 'https://voiceofoc.org/2022/10/oc-homelessness-policy-lands-back-in-court-santa-ana-stops-opening-of-countys-walk-in-shelter/',
  },
  {
    image: article14,
    link: 'https://voiceofoc.org/2022/10/in-reversal-federal-judge-allows-ocs-emergency-homeless-shelter-to-proceed-in-santa-ana/',
  },
  {
    image: article13,
    link: 'https://abc7.com/classic-fashion-apparel-company-hundreds-of-jobs-in-santa-ana-ribbon-cutting-ceremony-celebrating-new/12321907/',
  },
  {
    image: article1,
    link: 'https://correodelsur.com/sociedad/20201208_conoce-al-primer-boliviano-que-asume-como-alcalde-en-eeuu.html',
  },
  {
    image: article2,
    link: 'https://www.latimes.com/socal/daily-pilot/entertainment/story/2022-01-13/sarmiento?fbclid=IwAR22CvkWY79eM1TbTPH-hwSG_pUhGRbyXkYj6LVoDg4E20-Xzugn5aLWWQ0',
  },
  {
    image: article4,
    link: 'https://www.latimes.com/socal/daily-pilot/entertainment/story/2022-03-02/santa-ana-chooses-to-ban-sale-of-flavored-tobacco-products',
  },
  {
    image: article5,
    link: 'https://www.telemundo52.com/noticias/local/miles-de-residentes-de-santa-ana-podrian-recibir-un-estimulo-de-hasta-300/2238078/',
  },
  {
    image: article6,
    link: 'https://www.telemundo52.com/noticias/local/queda-prohibida-la-venta-de-tabaco-aromatizado-en-santa-ana/2267549/',
  },
  {
    image: article7,
    link: 'https://voiceofoc.org/2022/02/orange-county-takes-free-public-transit-leap-with-permanent-youth-bus-passes/?fbclid=IwAR3ZUsNiieSa7hYTkwDfl95_9ltNjti9VkEWHJriUVJbu2MIb0a9ebj7N9c',
  },
  {
    image: article8,
    link: 'https://voiceofoc.org/2022/03/how-would-santa-anas-own-public-health-department-work/',
  },
  {
    image: article9,
    link: 'https://voiceofoc.org/2021/09/santa-ana-council-narrowly-moves-forward-with-citywide-rent-control-eviction-protection-policies/',
  },
  {
    image: article10,
    link: 'https://voiceofoc.org/2021/01/latinos-are-being-left-behind-in-ocs-coronavirus-vaccination-efforts/',
  },
  {
    image: article11,
    link: 'https://www.washingtonpost.com/washington-post-live/2022/03/07/race-america-health-disparities-with-secretary-xavier-becerra-santa-ana-mayor-vicente-sarmiento/?fbclid=IwAR3sYR2lCGrIxnLgEmqluoDvSXObHmrH-E52Rv77X2q3oexF_tNgVmdMmLU',
  },
  { image: article12, link: '/press-release' },
]

function Articles() {
  return (
    <Layout>
      <h1 className="font-bold text-center text-xl pt-10 pb-6">In The News</h1>
      <div className="flex flex-row flex-wrap justify-center mx-auto max-w-6xl">
        {articles.map((article, i) => (
          <div className="p-3 leading-[0]" key={`${article.link}`}>
            {article.link.charAt(0) !== '/' ? (
              <a href={article.link} target="_blank" rel="noreferrer">
                <Image src={article.image} atl={`Article ${i}`} width={320} height={320} placeholder="blur" />
                <div className="flex justify-between items-center font-semibold bg-orange-500 text-blue-500 p-3">
                  <span>Read Article</span>
                  <Right />
                </div>
              </a>
            ) : (
              <Link href={article.link}>
                <a>
                  <Image src={article.image} atl={`Article ${i}`} width={320} height={320} placeholder="blur" />
                  <div className="flex justify-between items-center font-semibold bg-orange-500 text-blue-500 p-3">
                    <span>Read Article</span>
                    <Right />
                  </div>
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Articles;
