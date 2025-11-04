import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Diagnosis = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    hemoglobin: "",
    mcv: "",
    mch: "",
    mchc: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.age || !formData.gender || !formData.hemoglobin) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Store data in sessionStorage
    sessionStorage.setItem("patientData", JSON.stringify(formData));
    
    toast.success("Analysis complete!");
    navigate("/results");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 text-foreground">Patient Diagnosis</h1>
            <p className="text-muted-foreground">Enter patient information for anemia analysis</p>
          </div>

          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
              <CardDescription>Fill in the required blood test parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter patient name"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleChange("age", e.target.value)}
                      placeholder="Age"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                      <SelectTrigger className="bg-secondary border-border">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hemoglobin">Hemoglobin (g/dL) *</Label>
                  <Input
                    id="hemoglobin"
                    type="number"
                    step="0.1"
                    value={formData.hemoglobin}
                    onChange={(e) => handleChange("hemoglobin", e.target.value)}
                    placeholder="Normal: 12-16 (Female), 14-18 (Male)"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mcv">MCV - Mean Corpuscular Volume (fL)</Label>
                  <Input
                    id="mcv"
                    type="number"
                    step="0.1"
                    value={formData.mcv}
                    onChange={(e) => handleChange("mcv", e.target.value)}
                    placeholder="Normal: 80-100 fL"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mch">MCH - Mean Corpuscular Hemoglobin (pg)</Label>
                  <Input
                    id="mch"
                    type="number"
                    step="0.1"
                    value={formData.mch}
                    onChange={(e) => handleChange("mch", e.target.value)}
                    placeholder="Normal: 27-31 pg"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mchc">MCHC - Mean Corpuscular Hemoglobin Concentration (g/dL)</Label>
                  <Input
                    id="mchc"
                    type="number"
                    step="0.1"
                    value={formData.mchc}
                    onChange={(e) => handleChange("mchc", e.target.value)}
                    placeholder="Normal: 32-36 g/dL"
                    className="bg-secondary border-border"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Analyze Results
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Diagnosis;
