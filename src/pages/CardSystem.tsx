import { cn } from '../lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ className, children }: CardProps) {
  return (
    <div className={cn('rounded-xl border border-border bg-background shadow-card', className)}>
      {children}
    </div>
  );
}

function CardHeader({ className, children }: CardProps) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

function CardContent({ className, children }: CardProps) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

function CardFooter({ className, children }: CardProps) {
  return <div className={cn('p-6 pt-0 flex gap-3', className)}>{children}</div>;
}

export function CardSystem() {
  return (
    <div className="space-y-12">
      <div>
        <h1>Card System</h1>
        <p className="text-text mt-2">
          Componente de card modular com header, content e footer.
        </p>
      </div>

      <section className="space-y-6">
        <h2>Card Básico</h2>
        <div className="max-w-md">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium text-text-heading">Título do Card</h3>
            </CardHeader>
            <CardContent>
              <p className="text-text">
                Este é o conteúdo do card. Você pode colocar qualquer elemento aqui, como texto,
                imagens ou outros componentes.
              </p>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium">
                Ação Primária
              </button>
              <button className="px-4 py-2 text-text hover:text-text-heading text-sm font-medium">
                Ação Secundária
              </button>
            </CardFooter>
          </Card>
        </div>
        <pre className="p-4 bg-code-bg rounded-lg overflow-x-auto">
          <code>{`<Card>
  <CardHeader>
    <h3>Título do Card</h3>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card...</p>
  </CardContent>
  <CardFooter>
    <button>Ação Primária</button>
    <button>Ação Secundária</button>
  </CardFooter>
</Card>`}</code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2>Card com Imagem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-accent to-purple-600" />
            <CardContent>
              <h3 className="text-lg font-medium text-text-heading">Card com Gradiente</h3>
              <p className="text-text mt-2">
                Um card com uma área de imagem usando gradiente como placeholder.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 bg-accent-bg flex items-center justify-center">
              <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <CardContent>
              <h3 className="text-lg font-medium text-text-heading">Card com Ícone</h3>
              <p className="text-text mt-2">
                Um card com área de mídia usando ícone como placeholder.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2>Card Compacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-bg flex items-center justify-center">
                  <span className="text-accent font-medium">{i}</span>
                </div>
                <div>
                  <h4 className="font-medium text-text-heading text-sm">Item {i}</h4>
                  <p className="text-xs text-text">Descrição breve</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2>Card Interativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="cursor-pointer hover:border-accent hover:shadow-lg transition-all duration-200">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text-heading">Sucesso</h3>
                  <p className="text-sm text-text mt-1">
                    Operação concluída com sucesso!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:border-red-500 hover:shadow-lg transition-all duration-200">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-text-heading">Erro</h3>
                  <p className="text-sm text-text mt-1">
                    Algo deu errado. Tente novamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
