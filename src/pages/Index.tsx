import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleXLogin = () => {
    console.log("Tentative de connexion avec X");
    toast({
      title: "Connexion X",
      description: "La connexion avec X sera bientôt disponible.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-twitter-blue/10 to-transparent">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
          Bienvenue sur <span className="text-twitter-blue">XTrackr</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Analysez et optimisez votre réseau X en quelques clics. Identifiez vos followers non réciproques et gérez vos abonnements efficacement.
        </p>
        <Button 
          size="lg" 
          className="bg-twitter-blue hover:bg-twitter-blue/90"
          onClick={handleXLogin}
        >
          <Twitter className="mr-2 h-5 w-5" />
          Se connecter avec X
        </Button>
      </div>
    </div>
  );
};

export default Index;