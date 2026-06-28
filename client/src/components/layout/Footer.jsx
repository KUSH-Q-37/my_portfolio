import Container from "../ui/Container";
import { portfolioData } from "../../data/portfolioData";

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">{portfolioData.name}</p>
            <p className="text-sm text-slate-400">{portfolioData.title}</p>
          </div>
          <a href="#home" className="text-sm text-slate-300 transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
