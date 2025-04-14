  import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
  import Image from "next/image";
  import Link from "next/link";
  import { Button } from "./ui/button";
  import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

  const Header = async () => {
    await checkUser();
    return (
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
        <nav className="w-full h-16 flex items-center justify-between px-4 md:px-8">
          {/* Logo on the far left */}
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Sensai Logo" 
                width={200} 
                height={60}
                className="h-17 py-1 w-auto object-contain" 
              />            
            </Link>
          
          {/* Navigation items pushed to far right */}
          <div className="flex items-center gap-4"> 
            <SignedIn>
              <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <Button variant="outline">
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="hidden md:block">Industry Insights</span>
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button 
                      variant="secondary"
                      className="flex items-center gap-2 bg-white hover:bg-white/90 text-black"
                    >
                      <StarsIcon className="h-4 w-4" />
                      <ChevronDown className="h-4 w-4" />
                      <span className="hidden md:block">Growth Tools</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/resume" className="flex items-center gap-2"> 
                        <FileText className="h-4 w-4" /> 
                        <span>Build Resume</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem> 
                      <Link href="/ai-cover-letter" className="flex items-center gap-2"> 
                        <PenBox className="h-4 w-4" /> 
                        <span>Cover Letter</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/interview" className="flex items-center gap-2"> 
                        <GraduationCap className="h-4 w-4" /> 
                        <span>Interview Prep</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                      userButtonPopoverCard: "shadow-xl",
                      userPreviewMainIdentifier: "font-semibold",
                    },
                  }} 
                  afterSignOutUrl="/"
                />
              </div>
            </SignedIn>

            <SignedOut>
              <div className="flex items-center gap-2">
              <SignInButton 
  mode="modal"
  aftersigninorl="/"
  aftersignupurl="/"
  signupurl="/sign-up"
>
  <Button variant="outline">Sign In</Button>
</SignInButton>
              <SignUpButton></SignUpButton>
              </div>
            </SignedOut>
          </div>
        </nav>
      </header>
    );
  };

  export default Header;
