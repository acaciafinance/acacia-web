
import LandingPage from '@/components/landing/LandingPage'
import React from 'react'


export const metadata = {
    metadataBase: new URL("https://acaciafinance.net"),
    keywords: ['Quiz app','Play quizzes','Challenge yourself','Daily quizzes','Trivia games','Online quizzes','Multiple categories','Rewarding quizzes','Test your knowledge','Interactive quizzes','Quiz challenges','Competitive quizzes','Win rewards','Category-based quizzes','Leaderboard quizzes'],
    title: {
      default: "ACACIA",
      template: `%s | Home`
    },
    openGraph: {
      description: 'Challenge yourself with daily trivia games on our quiz app! Play quizzes across multiple categories, earn rewards, and compete on the leaderboard.',
      images: [`https://acaciafinance.net/assets/logo/acacia-blue.png`]
    }
  }

const page = () => {
  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default page
