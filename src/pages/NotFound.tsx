import { useEffect } from "react";
import Button from "../components/Button";
import { Coffee, AlertCircle } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen flex items-center justify-center p-4 pt-32 pb-20 animate-fade-in text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 bg-caramel/10 text-caramel rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-espresso">
            Page Spilled
          </h1>
          <p className="text-espresso/70 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            Oops! The link you clicked seems to have spilled. This page does not exist or has been relocated.
          </p>
        </div>
        <div className="pt-2">
          <Button to="/" variant="primary" size="md">
            <Coffee className="w-4 h-4 mr-2" />
            Back to Cozy Home
          </Button>
        </div>
      </div>
    </div>
  );
}
