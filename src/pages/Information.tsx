import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Heart, Pill, Utensils } from "lucide-react";

const Information = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 text-foreground">Understanding Anemia</h1>
            <p className="text-muted-foreground">Comprehensive information and guidelines</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-secondary">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="types">Types</TabsTrigger>
              <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
              <TabsTrigger value="treatment">Treatment</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle>What is Anemia?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Anemia is a condition where your blood doesn't have enough healthy red blood cells or hemoglobin. 
                    Hemoglobin is the main part of red blood cells that binds oxygen. If you have too few or abnormal 
                    red blood cells, or if your hemoglobin is abnormal or low, the cells in your body won't get enough oxygen.
                  </p>
                  <p>
                    Symptoms of anemia, like fatigue, occur because organs aren't getting what they need to function properly.
                  </p>
                  
                  <div className="bg-secondary rounded-lg p-4 mt-4">
                    <h3 className="font-semibold mb-2">Normal Hemoglobin Levels:</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Adult males: 14-18 g/dL</li>
                      <li>• Adult females: 12-16 g/dL</li>
                      <li>• Children: varies by age (11-16 g/dL)</li>
                      <li>• Pregnant women: 11-12 g/dL</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="types" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Types of Anemia</CardTitle>
                  <CardDescription>Different causes lead to different types</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold mb-1">Iron Deficiency Anemia</h3>
                      <p className="text-sm text-muted-foreground">
                        The most common type. Caused by insufficient iron, which is needed to produce hemoglobin. 
                        Can result from blood loss, poor diet, or inability to absorb iron.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold mb-1">Vitamin Deficiency Anemia</h3>
                      <p className="text-sm text-muted-foreground">
                        Caused by low levels of vitamin B12 or folate (vitamin B9). These vitamins are essential 
                        for red blood cell production.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold mb-1">Aplastic Anemia</h3>
                      <p className="text-sm text-muted-foreground">
                        A rare, serious condition where the body stops producing enough new blood cells. 
                        Can be caused by infections, certain medicines, or autoimmune diseases.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold mb-1">Hemolytic Anemia</h3>
                      <p className="text-sm text-muted-foreground">
                        Occurs when red blood cells are destroyed faster than they can be replaced. 
                        Can be inherited or acquired.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold mb-1">Sickle Cell Anemia</h3>
                      <p className="text-sm text-muted-foreground">
                        An inherited form caused by a defective form of hemoglobin that forces red blood cells 
                        into abnormal crescent (sickle) shapes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="symptoms" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    <CardTitle>Common Symptoms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Physical Symptoms:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Fatigue and weakness</li>
                        <li>• Pale or yellowish skin</li>
                        <li>• Shortness of breath</li>
                        <li>• Dizziness or lightheadedness</li>
                        <li>• Cold hands and feet</li>
                        <li>• Chest pain</li>
                        <li>• Irregular heartbeat</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Other Signs:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Headaches</li>
                        <li>• Brittle nails</li>
                        <li>• Unusual cravings (pica)</li>
                        <li>• Difficulty concentrating</li>
                        <li>• Frequent infections</li>
                        <li>• Sore or swollen tongue</li>
                        <li>• Rapid or irregular heartbeat</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-destructive/10 border border-destructive rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Important:</strong> Mild anemia may not cause noticeable symptoms. Regular blood tests 
                      are important for early detection. If you experience severe symptoms, seek immediate medical attention.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="treatment" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Pill className="w-6 h-6 text-primary" />
                    <CardTitle>Treatment Options</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Treatment depends on the cause and severity of anemia:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-secondary rounded-lg p-4">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-primary" />
                        Dietary Changes
                      </h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Iron-rich foods: Red meat, leafy greens, beans, fortified cereals</li>
                        <li>• Vitamin B12: Meat, dairy, eggs, fortified foods</li>
                        <li>• Folate: Leafy greens, citrus fruits, beans, whole grains</li>
                        <li>• Vitamin C: Helps absorb iron (citrus fruits, tomatoes, peppers)</li>
                      </ul>
                    </div>

                    <div className="bg-secondary rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Supplements</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Iron supplements for iron deficiency anemia</li>
                        <li>• Vitamin B12 injections or pills</li>
                        <li>• Folic acid supplements</li>
                        <li>• Consult healthcare provider for proper dosage</li>
                      </ul>
                    </div>

                    <div className="bg-secondary rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Medical Treatments</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Medications to stimulate red blood cell production</li>
                        <li>• Blood transfusions for severe cases</li>
                        <li>• Treatment of underlying conditions</li>
                        <li>• Bone marrow transplant (for severe cases)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Prevention Tips:</strong> Eat a balanced diet rich in iron and vitamins, 
                      treat underlying conditions promptly, and have regular health check-ups.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Information;
