import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import config from "../../config/index"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"
import LinkButton from "../linkButton"
import aboutStyles from "../../styles/about.module.css"

const About = ({ setIsAboutAnimationDone }) => {
  const { socialMedia } = config

  const data = useStaticQuery(graphql`
    query Image {
      image: file(relativePath: { eq: "about/me.png" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const headingControls = useAnimation()
  const sectionControls = useAnimation()

  useEffect(() => {
    const animationSequence = async () => {
      await headingControls.start({ opacity: 1, x: 0 })
      await sectionControls.start({ opacity: 1, y: 0 })
      setIsAboutAnimationDone(true)
    }

    animationSequence()
  }, [headingControls, sectionControls, setIsAboutAnimationDone])

  return (
    <section id="about">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={headingControls}>
        <h2>A lil’ about me:</h2>
      </motion.div>
      <motion.div
        className={aboutStyles.about}
        initial={{ opacity: 0, y: 50 }}
        animate={sectionControls}
      >
        <Img
          className={`${aboutStyles.picture} ${aboutStyles.imgAnimation}`}
          fluid={data.image.childImageSharp.fluid}
          alt="Me"
        />
        <div className={aboutStyles.text}>
          <div className={aboutStyles.blurb}>
            My name is <strong>Reniel Ocampo</strong> and I’m a recent computer
            science grad from the{" "}
            <strong>University of California, Irvine</strong>. I attribute my
            start into programming when I began coding static HTML pages on
            Neopets. I’ve since grown an interest in web development, graphic
            design, and computer architecture. <br />
            Aside from developing I’m a big reader, concert goer, and ukulele
            fiddler. I also really, really like Ariana Grande.
          </div>

          <div className={aboutStyles.links}>
            <strong>You can also find me at these places:</strong>
            <ul className={aboutStyles.aboutMeList}>
              {socialMedia.map(socialLink => (
                <li key={`socialLink${socialLink.name}`}>
                  <LinkButton text={socialLink.name} linkTo={socialLink.url} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
