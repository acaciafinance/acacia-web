import Start from "@/components/start/Start";
import Image from "next/image";

export const metadata = {
  metadataBase: new URL("https://acaciafinance.net"),
  keywords: ['Quiz app','Play quizzes','Challenge yourself','Daily quizzes','Trivia games','Online quizzes','Multiple categories','Rewarding quizzes','Test your knowledge','Interactive quizzes','Quiz challenges','Competitive quizzes','Win rewards','Category-based quizzes','Leaderboard quizzes'],
  title: {
    default: "Acacia",
    template: `%s | Acacia`
  },
  openGraph: {
    description: 'Challenge yourself with daily trivia games on our quiz app! Play quizzes across multiple categories, earn rewards, and compete on the leaderboard.',
    images: [`https://quizzo.ng/assets/hero/quizzo.jpeg`]
  }
}

export default function Home() {

  

  // console.log(user)


  return (
    <div>
      <Start />
    </div>
  );
}
