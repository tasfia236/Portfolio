import AboutUsSection from '@/components/AboutUsSection'
import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import SkillsSection from '@/components/SkillsSection'

export default function Home () {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <SkillsSection />
      <EducationSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
  </>
  )
}
