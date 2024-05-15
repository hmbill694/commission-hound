import { LayoutProps } from ".next/types/app/layout";

export default function FormPageLayout({ children }: LayoutProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {children}
      </div>
    </div>
  )
}