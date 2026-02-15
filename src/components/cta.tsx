import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to transform your HR?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join thousands of companies using TeamPulse to build better teams.
          Start your 14-day free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
          >
            Start free trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 text-lg font-semibold bg-transparent"
          >
            Talk to sales
          </Button>
        </div>
        <p className="text-white/80 text-sm mt-6">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}