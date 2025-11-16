import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Chrome, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

interface BrowserDetails {
  browser: string;
  os: string;
  device: string;
  screenResolution: string;
  language: string;
}

const BrowserInfo = () => {
  const [browserInfo, setBrowserInfo] = useState<BrowserDetails>({
    browser: "",
    os: "",
    device: "",
    screenResolution: "",
    language: "",
  });

  useEffect(() => {
    const detectBrowser = () => {
      const ua = navigator.userAgent;
      let browser = "Unknown";
      
      if (ua.includes("Chrome") && !ua.includes("Edg")) browser = "Chrome";
      else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
      else if (ua.includes("Firefox")) browser = "Firefox";
      else if (ua.includes("Edg")) browser = "Edge";
      else if (ua.includes("Opera")) browser = "Opera";

      return browser;
    };

    const detectOS = () => {
      const ua = navigator.userAgent;
      let os = "Unknown";

      if (ua.includes("Win")) os = "Windows";
      else if (ua.includes("Mac")) os = "MacOS";
      else if (ua.includes("Linux")) os = "Linux";
      else if (ua.includes("Android")) os = "Android";
      else if (ua.includes("iOS")) os = "iOS";

      return os;
    };

    const detectDevice = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "Tablet";
      }
      if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "Mobile";
      }
      return "Desktop";
    };

    setBrowserInfo({
      browser: detectBrowser(),
      os: detectOS(),
      device: detectDevice(),
      screenResolution: `${window.screen.width} × ${window.screen.height}`,
      language: navigator.language,
    });
  }, []);

  const infoItems = [
    { icon: Chrome, label: "Browser", value: browserInfo.browser, color: "text-primary" },
    { icon: Monitor, label: "Operating System", value: browserInfo.os, color: "text-secondary" },
    { icon: Smartphone, label: "Device Type", value: browserInfo.device, color: "text-accent" },
    { icon: Monitor, label: "Screen Resolution", value: browserInfo.screenResolution, color: "text-primary" },
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5 text-secondary" />
          Browser & Device Information
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="rounded-lg bg-background p-2">
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BrowserInfo;
