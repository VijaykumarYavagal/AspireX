import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";


export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="-ml-15 -mt-18 container mx-auto py-6">
      
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}
