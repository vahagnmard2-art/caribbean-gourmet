import { Hero }           from '@/components/Hero'
import { PressBar }       from '@/components/PressBar'
import { ChefStory }      from '@/components/ChefStory'
import { MenuPreview }    from '@/components/MenuPreview'
import { Pillars }        from '@/components/Pillars'
import { ReviewsMarquee } from '@/components/ReviewsMarquee'
import { GuyanaNight }    from '@/components/GuyanaNight'
import { VIPSignup }      from '@/components/VIPSignup'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressBar />
      <ChefStory />
      <MenuPreview />
      <Pillars />
      <ReviewsMarquee />
      <GuyanaNight />
      <VIPSignup />
    </>
  )
}
