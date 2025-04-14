import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import OnboardingForm from "./_components/onboarding-form";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
// check if user is already onboarded
 const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
      // redirect to home page if already onboarded
      redirect('/dashboard');
    }

  return (
    <main>
      <OnboardingForm industries={industries} /> </main>
  )
}

export default OnboardingPage;