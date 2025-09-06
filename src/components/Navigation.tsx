import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-gradient hover:scale-105 smooth-transition"
            >
              AJ
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary smooth-transition relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Let's Talk
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary smooth-transition"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl text-muted-foreground hover:text-primary smooth-transition"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;