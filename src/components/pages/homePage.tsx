import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wand2,
  Mic,
  Brain,
  FileText,
  Accessibility,
  Headphones,
  Eye,
  Zap, FileDigit, Save,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  GraduationCap
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }:FeatureCardProps) => {
  return (
    <Card className="border bg-white hover:shadow-md transition-shadow duration-300 group">
      <CardContent className="pt-6">
        <div className="text-primary mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <CardTitle className="mb-3 text-gray-900">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed w-full top-0 z-30 flex justify-between items-center py-4 px-6 lg:px-12 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Mic className="h-6 w-6 text-primary" />
          <span className="text-primary">Transkriptor</span>
          <span className="font-light">AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#saiba-mais"
            className={`text-sm transition-colors hover:text-primary text-primary`}
          >
            O que é
          </a>
          <a
            href="#acessibilidade"
            className={`text-sm transition-colors hover:text-primary text-primary"`}
          >
            Acessibilidade
          </a>
          <a
            href="#recursos"
            className={`text-sm transition-colors hover:text-primary text-primary`}
          >
            Recursos
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden md:flex text-gray-600 hover:text-primary"
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/register">Cadastro</Link>
          </Button>
        </div>
      </nav>

      <section
        className={`${"translate-y-0 opacity-100"} relative px-6 pt-32 pb-20 lg:px-12 transition-all duration-1000 bg-gradient-to-b from-white to-gray-50`}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <Badge
              variant="outline"
              className="px-3 py-1 mb-6 text-sm bg-primary/10 border-primary/20 text-primary"
            >
              Novo: Suporte para 15+ idiomas
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Transformando{" "}
              <span className="text-primary underline decoration-primary/30 decoration-2 underline-offset-4">
                voz
              </span>{" "}
              em{" "}
              <span className="text-primary underline decoration-primary/30 decoration-2 underline-offset-4">
                texto
              </span>{" "}
              para todos
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              O Transkriptor AI é uma ferramenta avançada que transforma áudio
              em texto com precisão, tornando o conteúdo acessível para todos,
              incluindo recursos de conversão para Braille e outras formas de
              acessibilidade.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="gap-2 rounded-full">
                <Link to="/register">
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-full border-gray-300 text-gray-700 hover:text-primary hover:border-primary"
              >
                <a href="#saiba-mais">
                  Saiba mais
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs text-primary"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                +2000 usuários confiam no Transkriptor AI
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Card className="border border-gray-200 bg-white shadow-lg overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 border-primary/20 text-primary text-xs"
                  >
                    Ao vivo
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mic className="h-4 w-4 text-primary" />
                    </div>
                    <div className="px-4 py-2 bg-gray-100 rounded-lg rounded-tl-none max-w-xs">
                      <p className="text-sm text-gray-700">
                        Processando áudio...
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start self-end">
                    <div className="px-4 py-2 bg-primary/20 rounded-lg rounded-tr-none max-w-xs">
                      <p className="text-sm text-primary-foreground">
                        Transformando em texto acessível...
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="flex gap-2 items-start mt-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-gray-100 rounded-lg rounded-tl-none p-4 max-w-sm">
                      <h5 className="font-medium mb-1 text-gray-900">
                        Transcrição concluída
                      </h5>
                      <p className="text-sm text-gray-600 mb-2">
                        "A acessibilidade digital é um direito de todos e deve
                        ser prioridade no desenvolvimento de produtos e serviços
                        online."
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        Pronto para exportar
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="saiba-mais"
        className="relative px-6 py-20 lg:px-12 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="px-3 py-1 mb-4 text-sm bg-primary/10 border-primary/20 text-primary"
            >
              Conheça
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              O que é <span className="text-primary">Transkriptor AI</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma solução completa para transformar conteúdos de áudio em
              formatos acessíveis para todos os públicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Definição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600">
                  Um transcritor é uma ferramenta que converte a fala em texto
                  escrito, permitindo que conteúdo auditivo seja transformado em
                  formato textual. O{" "}
                  <span className="text-primary font-medium">
                    Transkriptor AI
                  </span>{" "}
                  vai além, oferecendo recursos avançados de processamento de
                  linguagem natural e suporte para múltiplos formatos de
                  acessibilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Wand2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Como funciona
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600">
                  Nosso sistema utiliza algoritmos avançados de reconhecimento
                  de fala para detectar padrões sonoros e convertê-los em texto
                  com alta precisão. Após a transcrição, processamos o texto
                  para correções automáticas e adaptações para diferentes
                  formatos de acessibilidade.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-10 text-gray-900">
              Processo de Transcrição
            </h3>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 max-w-5xl mx-auto">
                {[
                  {
                    icon: <Mic className="h-6 w-6 text-primary-foreground" />,
                    title: "Captura de Áudio",
                    description:
                      "Gravação ou upload do conteúdo de áudio para processamento",
                  },
                  {
                    icon: <Brain className="h-6 w-6 text-primary-foreground" />,
                    title: "Processamento IA",
                    description:
                      "Algoritmos de IA analisam e convertem o áudio em texto",
                  },
                  {
                    icon: (
                      <FileText className="h-6 w-6 text-primary-foreground" />
                    ),
                    title: "Transcrição",
                    description:
                      "Geração de texto preciso com formatação e pontuação",
                  },
                  {
                    icon: (
                      <Accessibility className="h-6 w-6 text-primary-foreground" />
                    ),
                    title: "Acessibilidade",
                    description:
                      "Conversão para formatos acessíveis como Braille e áudio",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative z-10"
                  >
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground relative mb-4">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-primary text-primary flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <h4 className="font-medium mb-1 text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 max-w-[150px]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="acessibilidade"
        className="relative px-6 py-20 lg:px-12 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Por que a <span className="text-primary">Acessibilidade</span> é
            importante?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Headphones className="h-10 w-10" />}
              title="Inclusão Auditiva"
              description="Pessoas com deficiência auditiva podem acessar conteúdo de áudio através de transcrições precisas e detalhadas."
            />
            <FeatureCard
              icon={<Eye className="h-10 w-10" />}
              title="Inclusão Visual"
              description="Conversão para Braille e outros formatos acessíveis permite que pessoas com deficiência visual acessem conteúdo textual."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10" />}
              title="Inclusão Cognitiva"
              description="Textos podem ser simplificados e adaptados para pessoas com diferentes necessidades de processamento de informação."
            />
          </div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Estatísticas de Acessibilidade
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Mais de 1 bilhão de pessoas no mundo vivem com alguma forma de
              deficiência. Ferramentas de acessibilidade como o Transkriptor AI
              ajudam a derrubar as barreiras de comunicação e acesso à
              informação.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  value: "15%",
                  label: "da população mundial tem alguma deficiência",
                },
                { value: "466M", label: "pessoas têm deficiência auditiva" },
                { value: "285M", label: "pessoas têm deficiência visual" },
                {
                  value: "75%",
                  label: "dos sites não são totalmente acessíveis",
                },
              ].map((stat, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="recursos"
        className="relative px-6 py-20 lg:px-12 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-900">
            Recursos do <span className="text-primary">Transkriptor AI</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Zap className="h-10 w-10" />}
              title="Transcrição em Tempo Real"
              description="Converta áudio em texto instantaneamente, com suporte para várias línguas e sotaques."
            />
       
            <FeatureCard
              icon={<FileDigit className="h-10 w-10" />}
              title="Resumo Automático"
              description="Crie resumos concisos das transcrições para facilitar a compreensão rápida."
            />
        
        
            <FeatureCard
              icon={<Save className="h-10 w-10" />}
              title="Exportação Versátil"
              description="Exporte as transcrições em diversos formatos como TXT, PDF, DOC e formatos acessíveis."
            />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            Pronto para tornar seu conteúdo acessível?
          </h2>
          <p className="text-xl mb-10 text-gray-600">
            Junte-se a milhares de pessoas e organizações que já usam o
            Transkriptor AI para derrubar barreiras de comunicação e criar um
            mundo mais inclusivo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/register">Cadastre-se gratuitamente</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:text-primary hover:border-primary"
            >
              <Link to="/login">Fazer login</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative px-6 py-10 lg:px-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-primary">Transkriptor AI</span>
            </div>
            <p className="text-sm mt-2 text-gray-500">
              © 2025 - Todos os direitos reservados
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">
                Links rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Acessibilidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
