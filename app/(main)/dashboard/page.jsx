import { redirect } from 'next/navigation';
import { getUserOnboardingStatus } from '@/actions/user';
import { getIndustryInsights } from '@/actions/dashboard';
import DashboardView from "./_component/dashboard-view";

const IndustryInsightsPage = async () => {
   const { isOnboarded } = await getUserOnboardingStatus();
    if (!isOnboarded) {
        // redirect to home page if already onboarded
        redirect('/onboarding');
      }
      const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
            <DashboardView insights={insights} />

      </div>
  )
};

export default IndustryInsightsPage;