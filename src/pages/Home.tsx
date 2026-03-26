import { Link } from 'react-router-dom';

const designSystems = [
  {
    name: 'Button System',
    description: 'Coleção de botões com diferentes variantes, tamanhos e estados.',
    href: '/button-system',
  },
  {
    name: 'Card System',
    description: 'Componentes de cards versáteis para diversos casos de uso.',
    href: '/card-system',
  },
];

export function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1>Design System Showcase</h1>
        <p className="text-lg text-text max-w-2xl mx-auto">
          Explore os componentes e sistemas de design que criei. Cada sistema é documentado
          com exemplos interativos e código fonte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
        {designSystems.map((system) => (
          <Link
            key={system.href}
            to={system.href}
            className="group p-6 border border-border rounded-xl hover:border-accent hover:shadow-card transition-all duration-200 bg-background"
          >
            <h2 className="text-xl font-medium text-text-heading group-hover:text-accent transition-colors">
              {system.name}
            </h2>
            <p className="mt-2 text-text">
              {system.description}
            </p>
            <div className="mt-4 text-sm text-accent font-medium">
              Ver documentação →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
