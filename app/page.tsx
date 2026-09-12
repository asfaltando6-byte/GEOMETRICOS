import Image, { type ImageProps } from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  Eye,
  FileCheck2,
  Gift,
  GraduationCap,
  Layers3,
  Lightbulb,
  MessageCircle,
  PackageCheck,
  Palette,
  Printer,
  Scissors,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const idealFor = [
  { icon: GraduationCap, text: "Vai trabalhar sólidos geométricos com a turma" },
  { icon: Palette, text: "Quer uma aula mais prática, visual e participativa" },
  { icon: Printer, text: "Precisa de um material pronto para imprimir" },
  { icon: Clock3, text: "Não quer perder tempo criando atividades do zero" },
  { icon: Lightbulb, text: "Quer ajudar os alunos a entenderem melhor o conteúdo" },
];

const accessItems = [
  { icon: Eye, title: "Cartazes visuais", text: "Apresente os principais sólidos e suas características com apoio visual." },
  { icon: Scissors, title: "Moldes planificados", text: "Imprima, recorte, dobre e monte formas tridimensionais com a turma." },
  { icon: Layers3, title: "Atividades de fixação", text: "Trabalhe associação, comparação, faces, arestas e vértices." },
  { icon: FileCheck2, title: "Cartões pedagógicos", text: "Use em jogos, revisões rápidas e propostas em pequenos grupos." },
];

const faqs = [
  ["Como receberei o material?", "Após a confirmação do pagamento, você recebe o acesso digital pelo WhatsApp e pode abrir os arquivos pelo celular ou computador."],
  ["O material chega impresso?", "Não. Você receberá os arquivos digitais em alta qualidade e poderá imprimir apenas as páginas que desejar."],
  ["Posso imprimir mais de uma vez?", "Sim. Você poderá imprimir novamente para uso próprio sempre que precisar trabalhar o conteúdo."],
  ["Os moldes já estão prontos para recortar?", "Sim. As planificações estão organizadas para impressão, recorte, dobra e montagem."],
  ["Qual é a diferença entre as duas ofertas?", "A oferta Essencial inclui o kit principal. A oferta Completa reúne o kit principal e todos os bônus apresentados na página."],
  ["O pagamento é único?", "Sim. Não existe mensalidade ou cobrança recorrente."],
  ["Como funciona a garantia?", "Você tem 7 dias para acessar e conferir o material. Dentro desse prazo, poderá solicitar o reembolso caso o conteúdo não corresponda ao que foi apresentado."],
];

const coreBenefits = [
  "Material digital e acesso imediato",
  "Arquivos em alta qualidade",
  "Pronto para imprimir e aplicar",
];

const purchaseNotifications = [
  { name: "Ana", time: "07:42", complete: true },
  { name: "Beatriz", time: "08:05", complete: false },
  { name: "Carlos", time: "08:31", complete: true },
  { name: "Daniel", time: "09:07", complete: false },
  { name: "Eduardo", time: "09:26", complete: true },
  { name: "Fernanda", time: "09:54", complete: true },
  { name: "Gabriel", time: "10:18", complete: false },
  { name: "Juliana", time: "10:47", complete: true },
  { name: "Larissa", time: "11:23", complete: false },
  { name: "Leonardo", time: "11:51", complete: true },
  { name: "Lucas", time: "12:16", complete: false },
  { name: "Marcelo", time: "13:08", complete: true },
  { name: "Mariana", time: "13:37", complete: true },
  { name: "Patrícia", time: "14:12", complete: false },
  { name: "Pedro", time: "14:46", complete: true },
  { name: "Rafael", time: "15:21", complete: false },
  { name: "Ricardo", time: "16:03", complete: true },
  { name: "Roberto", time: "16:48", complete: false },
  { name: "Rodrigo", time: "17:19", complete: true },
  { name: "Camila", time: "18:02", complete: true },
  { name: "Sérgio", time: "18:37", complete: false },
  { name: "Tatiana", time: "19:14", complete: true },
  { name: "Vanessa", time: "19:53", complete: false },
];

const activityImages = [
  { src: "/entregavel-piramide-original.webp", alt: "Página educativa original sobre a pirâmide, suas faces, arestas, vértice e base" },
  { src: "/entregavel-cubo-original.webp", alt: "Página educativa original sobre o cubo, suas faces, arestas e vértices" },
  { src: "/entregavel-cone-original.webp", alt: "Página educativa original sobre o cone, sua base, superfície curva e vértice" },
  { src: "/entregavel-cilindro-original.webp", alt: "Página educativa original sobre o cilindro, suas bases, altura e superfície curva" },
  { src: "/entregavel-esfera-original.webp", alt: "Página educativa original sobre a esfera, seu centro, raio e superfície curva" },
  { src: "/entregavel-prisma-original.webp", alt: "Página educativa original sobre o prisma triangular, suas bases, faces, arestas e vértices" },
];

const deliverableDetails = [
  {
    icon: Eye,
    color: "blue",
    label: "PARA APRESENTAR",
    title: "Cartazes visuais dos sólidos",
    text: "Mostram cada forma com nome, ilustração e características importantes para a explicação.",
    use: "Use no início da aula para apresentar faces, arestas, vértices e bases.",
  },
  {
    icon: Scissors,
    color: "orange",
    label: "PARA CONSTRUIR",
    title: "Moldes planificados prontos",
    text: "Planificações organizadas para imprimir, recortar, dobrar e transformar em sólidos 3D.",
    use: "A turma monta cubo, cone, cilindro, pirâmide e outras formas com as próprias mãos.",
  },
  {
    icon: Layers3,
    color: "purple",
    label: "PARA PRATICAR",
    title: "Atividades de associação",
    text: "Exercícios coloridos para ligar cada sólido ao objeto, nome, planificação e característica correta.",
    use: "Aplique individualmente ou em duplas para conferir o que os alunos compreenderam.",
  },
  {
    icon: FileCheck2,
    color: "green",
    label: "PARA FIXAR",
    title: "Cartões e páginas de revisão",
    text: "Cartões pedagógicos e folhas de fixação para comparar formas e revisar o conteúdo de maneira leve.",
    use: "Use em jogos, estações de aprendizagem, revisão rápida ou atividade para casa.",
  },
];

function StaticImage(props: ImageProps) {
  return <Image {...props} unoptimized />;
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15} /> Kit pedagógico digital e imprimível</span>
          <h1>Tire os sólidos geométricos do quadro e coloque o conteúdo <em>nas mãos dos alunos</em></h1>
          <p>Um kit digital com cartazes, moldes 3D e atividades prontas para a turma visualizar, montar e compreender cada forma.</p>
          <div className="hero-mockup">
            <StaticImage src="/hero-mockup-premium.webp" alt="Kit Sólidos Geométricos com capas pedagógicas e formas tridimensionais coloridas" fill priority sizes="(max-width: 900px) 94vw, 980px" />
          </div>
          <a className="cta" href="#ofertas">Quero acessar o material <ArrowRight size={19} /></a>
          <div className="hero-benefits">
            {coreBenefits.map((item) => <span key={item}><CheckCircle2 size={17} />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="deliverables" id="material">
        <div className="section-title">
          <span className="kicker orange">Veja o material por dentro</span>
          <h2>Entregáveis que deixam a aula <span>mais visual e participativa</span></h2>
        </div>
        <div className="activity-marquee" aria-label="Exemplos de atividades incluídas no kit">
          <div className="activity-track">
            {[...activityImages, ...activityImages].map((item, index) => (
              <div className="activity-card" key={`${item.src}-${index}`} aria-hidden={index >= activityImages.length}>
                <StaticImage src={item.src} alt={index < activityImages.length ? item.alt : ""} fill sizes="(max-width: 680px) 74vw, 360px" />
              </div>
            ))}
          </div>
        </div>
        <div className="deliverable-explainer">
          <div className="explainer-heading">
            <span>O que aparece nas imagens?</span>
            <h3>Veja exatamente o que cada material ensina e como usar</h3>
            <p>Não são apenas páginas bonitas: cada parte do kit tem uma função clara dentro da aula.</p>
          </div>
          <div className="deliverable-detail-grid">
            {deliverableDetails.map(({ icon: Icon, color, label, title, text, use }) => (
              <article key={title}>
                <div className={`detail-icon ${color}`}><Icon /></div>
                <div className="detail-copy">
                  <small>{label}</small>
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <div><CheckCircle2 size={17} /><span><strong>Na aula:</strong> {use}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="real-use-section">
        <div className="section-title">
          <span className="kicker green">Na prática com a turma</span>
          <h2>Um material feito para sair do papel e <span>ganhar vida na aula</span></h2>
          <p>Apresente, recorte, monte e explore as formas com participação ativa dos alunos.</p>
        </div>
        <div className="real-use-gallery">
          <figure className="real-photo main-photo"><StaticImage src="/professora-atividade-realista-v2.webp" alt="Professora orientando crianças em uma atividade com sólidos geométricos" fill sizes="(max-width: 900px) 92vw, 58vw" /></figure>
          <figure className="real-photo"><StaticImage src="/turma-montagem-realista-v2.webp" alt="Crianças e professora montando sólidos geométricos de papel" fill sizes="(max-width: 900px) 92vw, 34vw" /></figure>
          <figure className="real-photo"><StaticImage src="/adulto-preparando-realista-v2.webp" alt="Professora preparando e organizando o material para a aula" fill sizes="(max-width: 900px) 92vw, 34vw" /></figure>
        </div>
        <div className="real-use-proof"><CheckCircle2 /><p><strong>Visual, concreto e participativo:</strong> os alunos observam as características e constroem as formas com as próprias mãos.</p></div>
      </section>

      <section className="how-it-works" id="como-funciona">
        <div className="section-title">
          <span className="kicker green">Como funciona</span>
          <h2>Do arquivo para a aula em <span>três passos simples</span></h2>
        </div>
        <div className="steps">
          <article><div className="step-icon blue"><Download /></div><b>1</b><h3>Acesse</h3><p>Receba os arquivos digitais depois da confirmação da compra.</p></article>
          <article><div className="step-icon orange"><Printer /></div><b>2</b><h3>Imprima</h3><p>Escolha as páginas da aula e imprima na quantidade necessária.</p></article>
          <article><div className="step-icon purple"><BookOpenCheck /></div><b>3</b><h3>Aplique</h3><p>Use os cartazes, monte os sólidos e finalize com as atividades.</p></article>
        </div>
      </section>

      <section className="ideal-section">
        <div className="ideal-inner">
          <div className="ideal-heading">
            <span className="kicker orange">Material ideal para quem</span>
            <h2>Quer ensinar o conteúdo sem depender apenas de explicações no quadro</h2>
            <p>Uma solução prática para levar o conteúdo visual e concreto para dentro da aula.</p>
          </div>
          <div className="ideal-list">
            {idealFor.map(({ icon: Icon, text }, index) => (
              <div key={text}><span className={`ideal-icon color-${index + 1}`}><Icon size={22} /></span><p>{text}</p><Check size={18} /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="classroom-use">
        <div className="classroom-image"><StaticImage src="/sala-pratica-realista-v2.webp" alt="Professora e alunos usando sólidos geométricos de papel" fill sizes="(max-width: 900px) 92vw, 48vw" /></div>
        <div className="classroom-content">
          <span className="kicker green">Como usar na aula</span>
          <h2>Uma sequência pronta para <span>apresentar, construir e revisar</span></h2>
          <div className="use-list">
            <div><span>01</span><p><strong>Apresente</strong> cada sólido com os cartazes visuais.</p></div>
            <div><span>02</span><p><strong>Monte</strong> as formas com os moldes planificados.</p></div>
            <div><span>03</span><p><strong>Compare</strong> faces, arestas, vértices e superfícies.</p></div>
            <div><span>04</span><p><strong>Finalize</strong> com as atividades de fixação.</p></div>
          </div>
          <a className="text-link" href="#ofertas">Quero facilitar minhas aulas <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="access-section">
        <div className="section-title">
          <span className="kicker purple">O que você terá acesso</span>
          <h2>Um kit completo para trabalhar <span>do visual à prática</span></h2>
        </div>
        <div className="access-grid">
          {accessItems.map(({ icon: Icon, title, text }, index) => (
            <article key={title}><span className={`access-icon color-${index + 1}`}><Icon /></span><h3>{title}</h3><p>{text}</p><small><Check size={14} /> Incluído no kit</small></article>
          ))}
        </div>
      </section>

      <section className="bonus-section">
        <div className="section-title">
          <span className="kicker orange"><Gift size={16} /> Bônus especiais</span>
          <h2>Mais recursos para deixar a aula <span>ainda mais dinâmica</span></h2>
        </div>
        <div className="bonus-grid">
          <article><div className="bonus-media"><StaticImage src="/bonus-memoria-premium.webp" alt="Capa e cartas do Jogo da Memória dos Sólidos" fill sizes="(max-width: 680px) 88vw, 320px" /></div><div className="bonus-number">BÔNUS 1</div><span className="bonus-icon green-bg"><PackageCheck /></span><h3>Jogo da Memória dos Sólidos</h3><p>Cartas prontas para relacionar cada sólido à sua representação.</p><div className="bonus-value"><span>Valor de referência</span><strong>R$ 12,90</strong></div></article>
          <article><div className="bonus-media"><StaticImage src="/bonus-bingo-premium.webp" alt="Capa, cartelas e peças do Bingo dos Sólidos Geométricos" fill sizes="(max-width: 680px) 88vw, 320px" /></div><div className="bonus-number">BÔNUS 2</div><span className="bonus-icon orange-bg"><Users /></span><h3>Bingo dos Sólidos Geométricos</h3><p>Uma atividade coletiva para revisar o conteúdo de forma participativa.</p><div className="bonus-value"><span>Valor de referência</span><strong>R$ 12,90</strong></div></article>
          <article><div className="bonus-media"><StaticImage src="/bonus-guia-premium.webp" alt="Capa e páginas internas do Guia de Aplicação Rápida" fill sizes="(max-width: 680px) 88vw, 320px" /></div><div className="bonus-number">BÔNUS 3</div><span className="bonus-icon purple-bg"><BookOpenCheck /></span><h3>Guia de Aplicação Rápida</h3><p>Sugestões simples para combinar os materiais em diferentes momentos da aula.</p><div className="bonus-value"><span>Valor de referência</span><strong>R$ 9,90</strong></div></article>
        </div>
        <div className="bonus-anchor"><span>Valor de referência dos bônus: <s>R$ 35,70</s></span><strong>Incluídos na Oferta Completa</strong></div>
      </section>

      <section className="offers-section" id="ofertas">
        <div className="section-title">
          <span className="kicker green">Escolha sua versão</span>
          <h2>Comece com o kit que faz mais sentido para sua aula</h2>
        </div>
        <div className="offers-grid">
          <article className="price-card complete">
            <div className="popular">MAIS VANTAJOSA</div>
            <span className="plan-label">OFERTA COMPLETA</span>
            <h3>Kit + Todos os Bônus</h3>
            <p className="plan-description">Por apenas R$ 10 a mais, receba o kit principal e todos os recursos extras.</p>
            <ul>
              <li><Check /> Tudo da Oferta Essencial</li>
              <li><Check /> Jogo da Memória</li>
              <li><Check /> Bingo dos Sólidos</li>
              <li><Check /> Guia de Aplicação Rápida</li>
              <li><MessageCircle /> Receba pelo WhatsApp</li>
            </ul>
            <div className="plan-value"><span>Inclui R$ 35,70 em bônus</span><strong>Mais opções para apresentar, praticar e revisar</strong></div>
            <div className="price"><small>R$</small><strong>27</strong><small>,00</small></div>
            <a href="#ofertas">Quero o Kit Completo <ArrowRight size={18} /></a>
            <span className="safe-note"><MessageCircle size={15} /> Entrega digital pelo WhatsApp</span>
          </article>

          <article className="price-card essential">
            <span className="plan-label">OFERTA ESSENCIAL</span>
            <h3>Kit Sólidos Geométricos</h3>
            <p className="plan-description">A forma econômica de levar o conteúdo visual e prático para a sua turma.</p>
            <ul>
              <li><Check /> Cartazes visuais</li>
              <li><Check /> Moldes planificados</li>
              <li><Check /> Cartões pedagógicos</li>
              <li><Check /> Atividades de fixação</li>
              <li><MessageCircle /> Receba pelo WhatsApp</li>
            </ul>
            <div className="plan-value essential-value"><span>Kit principal completo</span><strong>Comece hoje por apenas R$ 17</strong></div>
            <div className="price"><small>R$</small><strong>17</strong><small>,00</small></div>
            <a href="https://app.zuptos.com.br/checkout/33c25714878ebf2e" target="_blank" rel="noopener noreferrer">Quero o Kit Essencial <ArrowRight size={18} /></a>
            <span className="safe-note"><MessageCircle size={15} /> Entrega digital pelo WhatsApp</span>
          </article>
        </div>
      </section>

      <section className="guarantee">
        <div className="guarantee-badge"><ShieldCheck size={38} /><strong>7</strong><span>DIAS</span></div>
        <div><span className="kicker green">Garantia incondicional</span><h2>Você tem 7 dias para conhecer o material</h2><p>Acesse os arquivos e confira todo o conteúdo. Se o material não corresponder ao que foi apresentado, você poderá solicitar o reembolso dentro desse prazo.</p></div>
      </section>

      <section className="faq" id="faq">
        <div className="section-title"><span className="kicker orange">Dúvidas frequentes</span><h2>Tudo o que você precisa saber antes de acessar</h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="final-cta">
        <Sparkles size={28} />
        <h2>Deixe os sólidos geométricos mais fáceis de visualizar, montar e entender</h2>
        <p>Escolha sua versão e receba o material digital para preparar a próxima aula.</p>
        <a className="cta" href="#ofertas">Quero escolher minha oferta <ArrowRight size={19} /></a>
      </section>

      <aside className="offer-notifications" aria-label="Compras recentes">
        {purchaseNotifications.map(({ name, time, complete }, index) => (
          <div className={`offer-toast ${complete ? "toast-complete" : "toast-essential"}`} style={{ animationDelay: `${index * 4}s` }} key={`${name}-${time}`}>
            <span>{complete ? <Gift /> : <PackageCheck />}</span>
            <p><strong>{name} comprou às {time}</strong><small>{complete ? "Oferta Completa • Kit + bônus" : "Oferta Essencial • Kit principal"}</small></p>
          </div>
        ))}
      </aside>

      <footer><p>Material pedagógico digital • Pagamento único • Acesso imediato</p></footer>
    </main>
  );
}
