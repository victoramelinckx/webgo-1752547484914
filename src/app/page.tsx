
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Transformamos tus recomendaciones en ventas digitales con soporte 24/7, para que te olvides de la gestión web." cta1="Empieza Ahora" />
<How step1Title="Descubre WebGo" step1Desc="Contáctanos para iniciar tu digitalización." step2Title="Web en 24 horas" step2Desc="Creamos tu tienda online rápidamente." step3Title="Soporte Continuo" step3Desc="Asistencia 24/7 para tu negocio digital." />
<Aboutus headline="WebGo: Tu Venta Digital Simplificada" subheadline="Transformamos recomendaciones en ventas online sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo." beneficiotitulo2="Ventas Aumentadas" beneficio2="Maximiza tu presencia online." />
<Services heading="Acelera Tu Transformación Digital" description="Llevamos tus ventas al mundo online sin complicaciones." services={[{"name":"Web Express","icon":"bolt","description":"Tu web de ventas lista en 24 horas."},{"name":"SEO Potente","icon":"chart-line","description":"Optimización para atraer más tráfico."},{"name":"Diseño Atractivo","icon":"palette","description":"Diseños que capturan la atención y venden."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Gestión de Contenido","icon":"edit","description":"Publica fácilmente, nosotros nos encargamos."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Datos que impulsan tus decisiones comerciales."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en realidades digitales impactantes." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender mis productos en línea?","respuesta":"WebGo se especializa en transformar tu negocio tradicional en una tienda online eficiente. Creamos un sitio web atractivo y fácil de usar que atrae a nuevos clientes y aumenta tus ventas. Así, puedes enfocarte en otros aspectos del negocio mientras nosotros manejamos tu presencia digital."},{"pregunta":"No tengo tiempo para aprender sobre ventas online, ¿qué soluciones ofrece WebGo?","respuesta":"Con WebGo no necesitas invertir tiempo extra en aprender sobre ventas online. Nosotros nos encargamos de todo: desde crear el sitio web hasta implementar estrategias de marketing digital efectivas, asegurando que tu negocio crezca sin que tengas que preocuparte de la parte técnica."},{"pregunta":"¿Qué beneficios obtendré al digitalizar mi negocio con WebGo?","respuesta":"Digitalizar tu negocio con WebGo te permite llegar a una audiencia más amplia, mejorar tu visibilidad online y aumentar tus ingresos. Nuestro enfoque personalizado te asegura una transición sencilla al mundo digital, con resultados visibles en poco tiempo."},{"pregunta":"¿Es complicado mantener un sitio web con los servicios de WebGo?","respuesta":"Con WebGo, mantener tu sitio web es fácil. Nos encargamos del mantenimiento y las actualizaciones, asegurándonos de que todo funcione sin problemas. Así, te puedes centrar en lo que mejor haces: manejar tu negocio."},{"pregunta":"¿Cómo asegura WebGo que mi sitio web atraiga a más clientes?","respuesta":"WebGo utiliza estrategias de SEO efectivas y diseño web profesional para asegurarse de que tu sitio web no solo sea visible, sino también atractivo para los clientes potenciales. Nos aseguramos de que cada visita tenga el potencial de convertirse en una venta."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio Local en un Éxito Online" 
                      description="Descubre cómo WebGo puede llevar tus ventas al mundo digital, sin estrés y sin complicaciones. Agenda una consulta gratuita y empieza a crecer hoy mismo."
                      formPostUrl="api/contact-us"
                      projectId="48HNKZp8C5Ndb6JQ5x2lOXCPd4s2"
                    />
<Footer />
    </main>
  );
}
