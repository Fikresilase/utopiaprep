import question from "../images/question.png";
import effective from "../images/effective.png";
import ai from "../images/ai.png";

function Features() {
  return (
    <section className="features mx-auto container  py-16 px-4 md:px-8">
      <h2 className="text-center text-3xl font-serif font-medium text-gray-800 dark:text-white mb-8">
        How It Works
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          image={question}
          title="Questions"
          description="Well-prepared practice questions  that help you familiarize yourself with basic to advanced question types."
        />
        <FeatureCard
          image={ai}
          title="AI Guide"
          description="Let our AI guide you through all the questions, explaining each one in the simplest way."
        />
        <FeatureCard
          image={effective}
          title="Efficiency"
          description="Utilize scientifically proven best practices of active learning for short yet effective study sessions."
        />
      </div>
    </section>
  );
}

function FeatureCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-lg dark:bg-neutral-700 dark:border-neutral-600 p-6">
      <img src={image} alt={title} className="w-16 h-16 mx-auto object-cover mb-6" />
      <h3 className="text-xl font-sans font-medium text-gray-800 dark:text-white mb-4">{title}</h3>
      <p className="text-base text-gray-600 dark:text-gray-200">{description}</p>
    </div>
  );
}

export default Features;

