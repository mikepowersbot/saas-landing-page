import { Button } from "@/components/ui/button";
import { FiArrowRight, FiPlay, FiCheck } from "react-icons/fi";

export function Cta() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to transform your HR?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of teams who trust TeamPulse to build better cultures and drive
            performance. Start your 14-day free trial today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold"
            >
              Start free trial
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-white/10 hover:bg-white/5 text-foreground px-8 py-6 text-lg font-semibold bg-transparent"
            >
              <FiPlay className="mr-2 h-5 w-5" />
              Watch demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-primary border-2 border-background"
                  />
                ))}
              </div>
              <span>4,000+ reviews on G2</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheck className="h-4 w-4 text-primary" />
              <span>SOC 2 certified</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-50">
            <div className="text-sm font-semibold text-muted-foreground">TRUSTED BY</div>
            {["Stripe", "Notion", "Airbnb", "Figma", "Shopify"].map((company) => (
              <div key={company} className="text-lg font-bold text-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}