import { Hero }           from '@/components/Hero'
import { PressBar }       from '@/components/PressBar'
import { Pillars }        from '@/components/Pillars'
import { ChefStory }      from '@/components/ChefStory'
import { MenuPreview }    from '@/components/MenuPreview'
import { ReviewsMarquee } from '@/components/ReviewsMarquee'
import { GuyanaNight }    from '@/components/GuyanaNight'
import { VIPSignup }      from '@/components/VIPSignup'
import { ReviewContest }  from '@/components/ReviewContest'
import { ScrollReveal }   from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal><PressBar /></ScrollReveal>
      <ScrollReveal><Pillars /></ScrollReveal>
      <ScrollReveal><ChefStory /></ScrollReveal>
      <ScrollReveal><MenuPreview /></ScrollReveal>
      <ScrollReveal><ReviewsMarquee /></ScrollReveal>
      <ScrollReveal><GuyanaNight /></ScrollReveal>
      <ScrollReveal><VIPSignup /></ScrollReveal>
      <ScrollReveal><ReviewContest /></ScrollReveal>
    </>
  )
}
