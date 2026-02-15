import { Button } from "@/components/ui/button";
import { FiBarChart2, FiUsers, FiTarget, FiMessageSquare, FiShield, FiZap, FiCheck, FiArrowRight } from "react-icons/fi";

const features = [
  {
    icon: FiBarChart2,
    title: "Performance Reviews",
    description: "Automated 360-degree feedback cycles with customizable templates, scoring, and actionable insights.",
    features: ["360° feedback", "Custom templates", "Analytics dashboard", "Automated reminders"],
  },
  {
    icon: FiUsers,
    title: "Employee Engagement",
    description: "Pulse surveys, recognition programs, and engagement metrics to measure and improve team morale.",
    features: ["Pulse surveys", "Recognition platform", "Engagement scoring", "Sentiment analysis"],
  },
  {
    icon: FiTarget,
    title: "OKR Tracking",
    description: "Set, align, and track objectives with key results. Connect individual goals to company vision.",
    features: ["Goal cascading", "Progress tracking", "Check-in meetings", "Milestone alerts"],
  },
  {
    icon: FiMessageSquare,
    title: "1:1 Meetings",
    description: "Structured meeting agendas, notes, and follow-ups to make every conversation count.",
    features: ["Agenda templates", "Notes history", "Action items", "Follow-up tracking"],
  },
  {
    icon: FiShield,
    title: "Enterprise Security",
    description: "SOC 2 compliant, encrypted data at rest and in transit, with SSO and role-based access control.",
    features: ["SOC 2 Type II", "SSO/SAML", "Role permissions", "Audit logs"],
  },
  {
    icon: FiZap,
    title: "HR Automations",
    description: "Automate onboarding, offboarding, and routine HR tasks to save 20+ hours per week.",
    features: ["Workflow builder", "Custom triggers", "Integration hub", "Batch operations"],
  },
];

const stats = [
  { value: "40%", label: "Time saved on admin" },
  { value: "3x", label: "Faster review cycles" },
  { value: "95%", label: "User satisfaction" },
  { value: "10k+", label: "Teams trusting us" },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful features for modern HR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage, measure, and grow your team. Built for
            companies that believe in the power of data-driven people management.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <FiCheck className="h-3 w-3 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="glass-card rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Why teams choose TeamPulse",
              items: [
                "Implementation in days, not months",
                "Intuitive interface - minimal training required",
                "Powerful integrations (Slack, Google, Microsoft)",
                "Dedicated customer success manager",
                "Flexible pricing for teams of all sizes",
                "Regular updates based on feedback",
              ],
            },
            {
              title: "Built for scale",
              items: [
                "Cloud-native architecture",
                "99.9% uptime SLA",
                "GDPR and CCPA compliant",
                "Advanced encryption standards",
                "Real-time data sync",
                "API-first design",
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-foreground mb-6">{section.title}</h3>
              <div className="grid grid-cols-1 gap-3">
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FiCheck className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}