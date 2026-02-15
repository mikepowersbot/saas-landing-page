import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-6">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 1000+ HR teams
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empower Your Team with
            <span className="block">Intelligent HR Management</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Streamline performance reviews, boost employee engagement, and align
            your team with OKR tracking that actually works. Start building a
            culture of growth today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl"
            >
              Get started for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 text-lg font-semibold bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>
              <span>Join 10,000+ teams</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1">4.9/5 from 500+ reviews</span>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder - would be the screenshot from Dribbble */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="relative rounded-xl shadow-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-gray-900/50 to-gray-800/50 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-lg opacity-75">Dashboard Preview</p>
                <p className="text-sm opacity-50">(Dribbble design would go here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}