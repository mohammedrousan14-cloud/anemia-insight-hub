import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

interface PatientData {
  name: string;
  age: string;
  gender: string;
  hemoglobin: string;
  mcv: string;
  mch: string;
  mchc: string;
}

const Results = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [diagnosis, setDiagnosis] = useState<{
    status: "normal" | "anemic" | "borderline";
    type: string;
    severity: string;
    recommendations: string[];
  } | null>(null);

  useEffect(() => {
    const data = sessionStorage.getItem("patientData");
    if (!data) {
      navigate("/diagnosis");
      return;
    }

    const parsed: PatientData = JSON.parse(data);
    setPatientData(parsed);

    // Simple diagnosis logic
    const hb = parseFloat(parsed.hemoglobin);
    const isMale = parsed.gender === "male";
    const normalMin = isMale ? 14 : 12;
    const normalMax = isMale ? 18 : 16;

    let status: "normal" | "anemic" | "borderline" = "normal";
    let type = "No anemia detected";
    let severity = "Normal";
    const recommendations: string[] = [];

    if (hb < normalMin) {
      if (hb < normalMin - 2) {
        status = "anemic";
        severity = "Moderate to Severe";
      } else {
        status = "borderline";
        severity = "Mild";
      }

      // Determine type based on MCV if available
      if (parsed.mcv) {
        const mcv = parseFloat(parsed.mcv);
        if (mcv < 80) {
          type = "Microcytic Anemia (possibly Iron Deficiency)";
          recommendations.push("Iron supplementation may be needed");
          recommendations.push("Check for sources of blood loss");
        } else if (mcv > 100) {
          type = "Macrocytic Anemia (possibly B12/Folate Deficiency)";
          recommendations.push("Vitamin B12 and folate supplementation recommended");
        } else {
          type = "Normocytic Anemia";
          recommendations.push("Further investigation needed");
        }
      } else {
        type = "Anemia detected - further testing recommended";
      }

      recommendations.push("Consult with a healthcare provider");
      recommendations.push("Follow a balanced, iron-rich diet");
    } else if (hb > normalMax) {
      type = "Hemoglobin above normal range";
      recommendations.push("Consult with healthcare provider for evaluation");
    } else {
      recommendations.push("Maintain a balanced diet");
      recommendations.push("Regular health check-ups recommended");
    }

    setDiagnosis({ status, type, severity, recommendations });
  }, [navigate]);

  if (!patientData || !diagnosis) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 text-foreground">Analysis Results</h1>
            <p className="text-muted-foreground">Patient: {patientData.name}</p>
          </div>

          <div className="space-y-6">
            <Card className={`bg-card border-2 ${
              diagnosis.status === "anemic" ? "border-destructive" :
              diagnosis.status === "borderline" ? "border-accent" :
              "border-green-600"
            }`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  {diagnosis.status === "anemic" && <AlertCircle className="w-8 h-8 text-destructive" />}
                  {diagnosis.status === "borderline" && <Info className="w-8 h-8 text-accent" />}
                  {diagnosis.status === "normal" && <CheckCircle2 className="w-8 h-8 text-green-600" />}
                  <div>
                    <CardTitle className="text-2xl">Diagnosis: {diagnosis.type}</CardTitle>
                    <CardDescription>Severity: {diagnosis.severity}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Patient Information:</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p><span className="text-muted-foreground">Age:</span> {patientData.age} years</p>
                      <p><span className="text-muted-foreground">Gender:</span> {patientData.gender}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Blood Parameters:</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <p><span className="text-muted-foreground">Hemoglobin:</span> {patientData.hemoglobin} g/dL</p>
                      {patientData.mcv && <p><span className="text-muted-foreground">MCV:</span> {patientData.mcv} fL</p>}
                      {patientData.mch && <p><span className="text-muted-foreground">MCH:</span> {patientData.mch} pg</p>}
                      {patientData.mchc && <p><span className="text-muted-foreground">MCHC:</span> {patientData.mchc} g/dL</p>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {diagnosis.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button onClick={() => navigate("/diagnosis")} variant="outline" className="flex-1">
                New Diagnosis
              </Button>
              <Button onClick={() => navigate("/information")} className="flex-1 bg-primary hover:bg-primary/90">
                Learn More About Anemia
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Results;
