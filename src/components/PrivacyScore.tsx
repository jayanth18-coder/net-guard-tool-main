import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const PrivacyScore = () => {
  const score = 75;
  
  const recommendations = [
    {
      status: "good",
      icon: CheckCircle2,
      text: "HTTPS encryption is active",
      color: "text-secondary",
    },
    {
      status: "warning",
      icon: AlertTriangle,
      text: "Consider using a VPN for enhanced privacy",
      color: "text-amber-500",
    },
    {
      status: "info",
      icon: Info,
      text: "Your browser fingerprint is partially visible",
      color: "text-primary",
    },
    {
      status: "warning",
      icon: AlertTriangle,
      text: "Enable tracker blocking in your browser",
      color: "text-amber-500",
    },
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Privacy Score
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-muted"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - score / 100)}`}
                className="text-primary transition-all duration-1000"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold">{score}</span>
            </div>
          </div>
          <p className="text-lg font-semibold">Good Privacy Protection</p>
          <p className="text-sm text-muted-foreground mt-1">
            Your privacy score is above average
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Recommendations</h4>
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <rec.icon className={`h-5 w-5 ${rec.color} flex-shrink-0 mt-0.5`} />
              <p className="text-sm">{rec.text}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacyScore;
