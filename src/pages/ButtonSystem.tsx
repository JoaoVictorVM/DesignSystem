import { useState } from 'react';
import { cn } from '../lib/utils';

const buttonVariants = ['primary', 'secondary', 'outline', 'ghost', 'destructive'] as const;
const buttonSizes = ['sm', 'md', 'lg'] as const;

type Variant = (typeof buttonVariants)[number];
type Size = (typeof buttonSizes)[number];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent/90',
  secondary: 'bg-accent-bg text-accent hover:bg-accent-border',
  outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  ghost: 'text-text hover:bg-accent-bg hover:text-text-heading',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function StateButton({ label, state }: { label: string; state: 'default' | 'hover' | 'active' | 'disabled' }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Button
        variant="primary"
        disabled={state === 'disabled'}
        onClick={state === 'active' ? () => {} : undefined}
        className={state === 'hover' ? 'opacity-90' : ''}
      >
        Button
      </Button>
      <span className="text-xs text-text">{label}</span>
    </div>
  );
}

export function ButtonSystem() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-12">
      <div>
        <h1>Button System</h1>
        <p className="text-text mt-2">
          Componente de botão com múltiplas variantes e tamanhos.
        </p>
      </div>

      <section className="space-y-6">
        <h2>Variantes</h2>
        <div className="flex flex-wrap gap-4 p-6 border border-border rounded-xl bg-background">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <pre className="p-4 bg-code-bg rounded-lg overflow-x-auto">
          <code>{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}</code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2>Tamanhos</h2>
        <div className="flex flex-wrap items-center gap-4 p-6 border border-border rounded-xl bg-background">
          {buttonSizes.map((size) => (
            <Button key={size} size={size}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Button>
          ))}
        </div>
        <pre className="p-4 bg-code-bg rounded-lg overflow-x-auto">
          <code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2>Estados</h2>
        <div className="flex flex-wrap gap-8 p-6 border border-border rounded-xl bg-background">
          <StateButton label="Default" state="default" />
          <StateButton label="Hover" state="hover" />
          <StateButton label="Active" state="active" />
          <StateButton label="Disabled" state="disabled" />
        </div>
      </section>

      <section className="space-y-6">
        <h2>Com Ícone</h2>
        <div className="flex flex-wrap gap-4 p-6 border border-border rounded-xl bg-background">
          <Button>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Adicionar
          </Button>
          <Button variant="secondary">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Upload
          </Button>
          <Button variant="outline">
            Download
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2>Loading State</h2>
        <div className="flex flex-wrap gap-4 p-6 border border-border rounded-xl bg-background">
          <Button onClick={() => setIsLoading(true)} disabled={isLoading}>
            {isLoading ? 'Carregando...' : 'Simular Loading'}
          </Button>
        </div>
      </section>
    </div>
  );
}
