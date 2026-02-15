import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever free",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 25 employees",
      "Basic performance reviews",
      "OKR tracking",
      "Email support",
      "1 HR admin",
      "Community access",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$8",
    period: "per employee / month",
    description: "For growing teams that need more power",
    features: [
      "Unlimited employees",
      "Advanced analytics",
      "Custom workflows",
      "API access",
      "Slack & Google integration",
      "Priority support",
      "Unlimited HR admins",
      "Single Sign-On (SSO)",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Advanced security controls",
      "Dedicated success manager",
      "On-premise deployment",
      "Custom training",
      "SLA guarantee",
      "Unlimited integrations",
      "Audit & compliance reports",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 ${
                plan.popular
                  ? "border-2 border-primary bg-primary/5 scale-105"
                  : "border border-white/10 bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> /{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <FiCheck className="h-4 w-4 text-primary" />
              256-bit encryption
            </span>
            <span className="flex items-center gap-2">
              <FiCheck className="h-4 w-4 text-primary" />
              GDPR compliant
            </span>
            <span className="flex items-center gap-2">
              <FiCheck className="h-4 w-4 text-primary" />
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}