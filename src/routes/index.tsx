import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Destacados, Servicios } from "@/components/site/Servicios";
import { Cobertura } from "@/components/site/Cobertura";
import { Empresas, Sucursales, CtaBand, Contacto, Footer } from "@/components/site/Inferior";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expreso Morabito · Encomiendas y cargas generales" },
      { name: "description", content: "Servicios diarios de encomiendas y cargas generales de AMBA a la Costa Atlántica." },
      { property: "og:title", content: "Expreso Morabito · Encomiendas y cargas generales" },
      { property: "og:description", content: "Servicios diarios de encomiendas y cargas generales de AMBA a la Costa Atlántica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Destacados />
        <Servicios />
        <Cobertura />
        <Empresas />
        <Sucursales />
        <CtaBand />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
