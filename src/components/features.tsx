import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Users,
  Target,
  MessageSquare,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Performance Reviews",
    description: "Automated review cycles with 360-degree feedback. Customizable templates and insightful analytics.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Employee Engagement",
    description: "Pulse surveys, recognition programs, and engagement metrics to keep your team motivated.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Target,
    title: "OKR Tracking",
    description: "Set, track, and achieve objectives with key results. Align individual goals with company vision.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: MessageSquare,
    title: "1:1 Meetings",
    description: "Structured one-on-one meetings with agenda templates and follow-up tracking.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Enterprise-grade security, SOC 2 compliant, with data encryption at rest and in transit.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "HR Automations",
    description: "Automate onboarding, offboarding, and routine HR tasks to save 20+ hours per week.",
    color: "from-cyan-500 to-cyan-600",
  },
];

const stats = [
  { value: "40%", label: "Time saved on admin" },
  { value: "3x", label: "Faster reviews" },
  { value: "95%", label: "User satisfaction" },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to manage your team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete HR platform that grows with your business. From performance
            reviews to OKRs, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features List */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why teams choose TeamPulse
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Easy to implement - go live in days, not months",
              "Intuitive interface that requires minimal training",
              "Powerful integrations with Slack, Google Workspace, and more",
              "Dedicated customer success team",
              "Flexible pricing for teams of all sizes",
              "Regular updates based on customer feedback",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}