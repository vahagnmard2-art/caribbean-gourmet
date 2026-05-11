import { Hero }           from '@/components/Hero'
import { PressBar }       from '@/components/PressBar'
import { Pillars }        from '@/components/Pillars'
import { ChefStory }      from '@/components/ChefStory'
import { MenuPreview }    from '@/components/MenuPreview'
import { ReviewsMarquee } from '@/components/ReviewsMarquee'
import { GuyanaNight }    from '@/components/GuyanaNight'
import { VIPSignup }      from '@/components/VIPSignup'
import { ReviewContest }  from '@/components/ReviewContest'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressBar />
      <Pillars />
      <ChefStory />
      <MenuPreview />
      <ReviewsMarquee />
      <GuyanaNight />
      <VIPSignup />
      <ReviewContest />
    </>
  )
}
