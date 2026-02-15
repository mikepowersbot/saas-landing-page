import { Button } from "@/components/ui/button";
import { FiPlay, FiStar, FiArrowRight, FiBarChart2, FiUsers, FiTarget, FiMessageSquare } from "react-icons/fi";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern - subtle grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Ambient glow effect */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <FiStar className="w-4 h-4 mr-2 fill-current" />
            Trusted by 1000+ HR teams worldwide
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Intelligent HR for
            <span className="block text-primary">Modern Teams</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Unify performance reviews, employee engagement, and OKR tracking in one
            beautiful platform. Make people analytics simple and actionable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-primary border-2 border-background"
                  />
                ))}
              </div>
              <span>Join 10,000+ teams</span>
            </div>
            <div className="flex items-center gap-1">
              <FiStar className="w-4 h-4 text-primary fill-primary" />
              <FiStar className="w-4 h-4 text-primary fill-primary" />
              <FiStar className="w-4 h-4 text-primary fill-primary" />
              <FiStar className="w-4 h-4 text-primary fill-primary" />
              <FiStar className="w-4 h-4 text-primary fill-primary" />
              <span className="ml-1">4.9/5 from 500+ reviews</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview - Custom designed mockup */}
        <div className="mt-20 mx-auto max-w-6xl">
          <div className="dashboard-preview p-1">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg">
              {/* Dashboard Header */}
              <div className="border-b border-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <FiBarChart2 className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-primary" />
                    <div className="h-4 w-32 bg-white/5 rounded" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Top Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Engagement Score", value: "87%", change: "+12%", icon: FiBarChart2 },
                    { label: "Reviews Completed", value: "94%", change: "+8%", icon: FiUsers },
                    { label: "OKRs On Track", value: "76%", change: "+5%", icon: FiTarget },
                    { label: "1:1s This Week", value: "12", change: "3 pending", icon: FiMessageSquare },
                  ].map((stat, i) => (
                    <div key={i} className="glass-card rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="h-4 w-4 text-primary" />
                        <span className="text-xs text-green-400">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Team Performance Chart */}
                  <div className="col-span-2 glass-card rounded-lg p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-foreground">Team Performance</h3>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                        <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                      </div>
                    </div>
                    <div className="h-40 flex items-end justify-between gap-1">
                      {[65, 80, 45, 90, 70, 85, 60, 95, 75, 88, 70, 92].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-sm"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Sep</span>
                      <span>Nov</span>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="glass-card rounded-lg p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        { action: "Review completed", user: "Sarah Chen", time: "2h ago" },
                        { action: "OKR updated", user: "Mike Johnson", time: "3h ago" },
                        { action: "1:1 meeting", user: "Emma Davis", time: "4h ago" },
                        { action: "Goal achieved", user: "Alex Kim", time: "5h ago" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-foreground truncate">{item.action}</p>
                            <p className="text-xs text-muted-foreground">{item.user} • {item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 gap-4">
                  {/* OKR Progress */}
                  <div className="glass-card rounded-lg p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-4">Q1 OKR Progress</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Increase revenue", progress: 78 },
                        { name: "Product launch", progress: 92 },
                        { name: "Team growth", progress: 65 },
                        { name: "Customer satisfaction", progress: 88 },
                      ].map((okr, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-foreground">{okr.name}</span>
                            <span className="text-primary">{okr.progress}%</span>
                          </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full transition-all duration-500"
                              style={{ width: `${okr.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming */}
                  <div className="glass-card rounded-lg p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-4">Upcoming Deadlines</h3>
                    <div className="space-y-3">
                      {[
                        { event: "Performance Reviews", date: "Mar 15", type: "urgent" },
                        { event: "OKR Check-in", date: "Mar 20", type: "normal" },
                        { event: "Team Offsite", date: "Mar 25", type: "normal" },
                        { event: "Quarter End", date: "Mar 31", type: "urgent" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-foreground">{item.event}</p>
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${item.type === 'urgent' ? 'bg-red-500' : 'bg-primary'}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: FiBarChart2, title: "Real-time Analytics", desc: "Track team performance with live dashboards" },
            { icon: FiUsers, title: "360° Feedback", desc: "Comprehensive review cycles" },
            { icon: FiTarget, title: "OKR Alignment", desc: "Connect goals to business outcomes" },
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <feature.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}