import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileText, Stethoscope, AlertCircle, Target, Users, Microscope, HeartPulse } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium">Professional Medical Analysis</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Anemia Diagnosis System
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Advanced diagnostic tool for analyzing blood parameters and identifying anemia types. 
                Get instant results with professional recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/diagnosis")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Start Diagnosis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/information")}
                  className="border-border hover:bg-secondary"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Learn About Anemia
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Quick Analysis</CardTitle>
                <CardDescription>
                  Enter blood test parameters and get instant diagnostic results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Professional Guidelines</CardTitle>
                <CardDescription>
                  Based on medical standards for hemoglobin and blood cell indices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Detailed Information</CardTitle>
                <CardDescription>
                  Comprehensive guide about anemia types, symptoms, and treatments
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Website Objectives Section */}
        <section className="container mx-auto px-4 py-16 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 border border-primary/20">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">أهداف الموقع</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Website Objectives
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نسعى لتحقيق الأهداف التالية من خلال هذا النظام التشخيصي
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Microscope className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">التشخيص المبكر لفقر الدم</CardTitle>
                  <CardDescription>
                    تمكين المستخدمين من اكتشاف فقر الدم في مراحله المبكرة من خلال تحليل معايير الدم الأساسية، مما يساعد في العلاج السريع والفعال
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">زيادة الوعي الصحي</CardTitle>
                  <CardDescription>
                    نشر المعلومات الطبية الصحيحة حول أنواع فقر الدم وأعراضه وطرق الوقاية والعلاج بطريقة مبسطة ومفهومة للجميع
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <HeartPulse className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">تسهيل الرعاية الصحية</CardTitle>
                  <CardDescription>
                    توفير أداة سهلة الاستخدام تساعد المرضى على فهم نتائج تحاليلهم وتوجيههم للخطوات التالية المناسبة
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">دعم القرار الطبي</CardTitle>
                  <CardDescription>
                    مساعدة الأطباء والمتخصصين في الحصول على تحليل أولي سريع لحالات فقر الدم بناءً على المعايير الطبية المعتمدة
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="container mx-auto px-4 pb-16">
          <Card className="max-w-3xl mx-auto bg-destructive/10 border-destructive/50">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Medical Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">
                    This tool is designed for educational and informational purposes. It should not replace 
                    professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare 
                    providers for proper medical evaluation and care.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
